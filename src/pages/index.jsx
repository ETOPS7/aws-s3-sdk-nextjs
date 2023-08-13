import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/aws_next_baner.png'
import NextLink from 'next/link'
import { Link } from '@nextui-org/react'

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
            as={NextLink}
            color="primary"
            underline="hover"
            isBlock
          >
            DynamoDB
          </Link>
          <Link
            href="/s3bucket"
            as={NextLink}
            color="success"
            underline="hover"
            isBlock
          >
            S3 Bucket
          </Link>
          <Link
            href="/lambda"
            as={NextLink}
            color="warning"
            underline="hover"
            isBlock
          >
            Lambda
          </Link>
        </div>
      </main>
    </div>
  )
}
