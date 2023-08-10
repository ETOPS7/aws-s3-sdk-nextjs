import React, { useRef, useState } from 'react'
import { s3Client } from '../sdk/S3Client'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { useFiles } from '../pages/FileContext'
import { Button } from '@nextui-org/react'

const FileUploader = () => {
  const bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME
  const [file, setFile] = useState(null)
  const { files, setFiles } = useFiles()
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file || uploading) return

    if (files.some((existingFile) => existingFile.Key === file.name)) {
      console.warn('A file with that name already exists:', file.name)
      return
    }

    setUploading(true)

    const params = {
      Bucket: bucketName,
      Key: file.name,
      Body: file,
      ContentType: file.type,
    }

    try {
      const command = new PutObjectCommand(params)
      await s3Client.send(command)
      setFiles((prevFiles) => [...prevFiles, { Key: file.name }])
      console.log('File successfully uploaded:', file.name)

      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      setFile(null)
    } catch (err) {
      console.error('Error uploading:', err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <form className="flex items-center space-x-6">
      <label className="block">
        <span className="sr-only">Choose file for download</span>
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
        "
        />
      </label>
      <Button
        color="warning"
        variant="ghost"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </Button>
    </form>
  )
}

export default FileUploader
