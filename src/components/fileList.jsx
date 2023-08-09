import React, { useState, useEffect } from 'react'
import { useFiles } from '../pages/FileContext'
import {
  ListObjectsV2Command,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { Button } from '@nextui-org/react'
import { CameraIcon } from '../pages/icons/CameraIcons'
import { s3Client } from './S3Client'

const FileList = () => {
  const bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME
  const { files, setFiles } = useFiles()

  const fetchFiles = async () => {
    try {
      const command = new ListObjectsV2Command({ Bucket: bucketName })
      const data = await s3Client.send(command)
      setFiles(data.Contents || [])
    } catch (err) {
      console.error('Ошибка получения списка файлов:', err)
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

      window.open(url, '_blank') // Открывает URL в новой вкладке

      console.log('Файл успешно открыт:', fileName)
    } catch (err) {
      console.error('Ошибка при открытии файла:', err)
    }
  }

  const handleDelete = async (fileName) => {
    try {
      const command = new DeleteObjectCommand({
        Bucket: bucketName,
        Key: fileName,
      })

      await s3Client.send(command)
      console.log('Файл успешно удален:', fileName)
    } catch (err) {
      console.error('Ошибка удаления файла:', err)
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