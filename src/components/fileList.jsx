import React, { useEffect } from 'react'
import { useFiles } from './FileContext'
import {
  ListObjectsV2Command,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { Button } from '@nextui-org/react'
import { CameraIcon } from './icons/CameraIcons'
import { s3Client } from '../sdk/S3Client'

const FileList = () => {
  const bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME
  const { files, setFiles } = useFiles()

  const fetchFiles = async () => {
    try {
      const command = new ListObjectsV2Command({ Bucket: bucketName })
      const data = await s3Client.send(command)
      setFiles(data.Contents || [])
    } catch (err) {
      console.error('Error retrieving file list:', err)
    }
  }

  useEffect(() => {
    fetchFiles()
  }, [])

  const handleDownload = async (fileName) => {
    try {
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: fileName,
      })

      const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 })

      window.open(url, '_blank')

      console.log('This file successfully opened:', fileName)
    } catch (err) {
      console.error('Error opening file:', err)
    }
  }

  const handleDelete = async (fileName) => {
    try {
      const command = new DeleteObjectCommand({
        Bucket: bucketName,
        Key: fileName,
      })

      await s3Client.send(command)
      console.log('File successfully deleted:', fileName)
    } catch (err) {
      console.error('Error deleting file:', err)

      throw err
    }
  }

  return (
    <div className="mt-20">
      <ul>
        {files.map((file) => (
          <div key={file.Key} className="grid justify-items-stretch">
            <li>
              <Button
                isIconOnly
                color="warning"
                variant="light"
                aria-label="Take a photo"
                onClick={() => handleDownload(file.Key)}
              >
                <CameraIcon />
              </Button>{' '}
              {file.Key}{' '}
              <Button
                isIconOnly
                color="danger"
                variant="light"
                onClick={() => {
                  handleDelete(file.Key).then(fetchFiles)
                }}
              >
                X
              </Button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default FileList
