import S3Uploader from '../../components/S3Uploader'
import FileList from '../../components/FileList'
import Image from 'next/image'
import profilePic from '/public/s3_bucket_logo.png'
import NextLink from 'next/link'
import { Link } from '@nextui-org/react'

export default function S3BucketPage() {
  return (
    <div>
      <div className="flex items-center justify-center mb-5">
        <Image src={profilePic} height={200} alt="baner" priority={true} />
      </div>
      <div className="flex items-center justify-center mb-5">
      <Link href="/" as={NextLink}
        >
          Return to Home
        </Link>
      </div>
      <div className="flex flex-col items-center mt-10">
        <S3Uploader />
      </div>
      <div className="flex items-center justify-center mb-5">
        <FileList />
      </div>
    </div>
  )
}
