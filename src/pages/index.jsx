import Head from 'next/head'
import Uploader from '../components/uploader'
import FileList from '../components/fileList'
import Image from 'next/image'
import profilePic from '/public/aws_next_baner.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js AWS S3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center min-h-screen">
        <h1 className="text-4xl mt-10 mb-5">AWS S3 Bucket</h1>
        <div className="flex items-center justify-center mb-5">
          <Image src={profilePic} height={200} alt="baner" priority={true} />
        </div>
        <div className="flex flex-col items-center mb-5">
          <Uploader />
        </div>
        <FileList />
      </main>
    </div>
  )
}
