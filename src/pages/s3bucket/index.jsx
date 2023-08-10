import S3Uploader from '@/components/S3Uploader'
import FileList from '@/components/FileList'
import Image from 'next/image'
import profilePic from '/public/s3_bucket_logo.png'
import Link from 'next/link'

export default function S3BucketPage() {
  return (
    <div>
      <div className="flex items-center justify-center mb-5">
        <Image src={profilePic} height={200} alt="baner" priority={true} />
      </div>
      <div className="flex items-center justify-center mb-5">
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Вернуться на главную
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
