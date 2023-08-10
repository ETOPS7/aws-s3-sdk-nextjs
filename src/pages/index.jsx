import Head from 'next/head'
import Image from 'next/image'
import profilePic from '/public/aws_next_baner.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js AWS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center mb-5 mt-10">
          <Image src={profilePic} height={200} alt="baner" priority={true} />
        </div>
        <div className="flex space-x-4">
          <Link
            href="/dynamodb"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            DynamoDB
          </Link>
          <Link
            href="/s3bucket"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            S3 Bucket
          </Link>
        </div>
      </main>
    </div>
  )
}
