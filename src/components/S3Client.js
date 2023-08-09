import { S3Client } from '@aws-sdk/client-s3'

export const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  },
})
