import React from 'react'
import DynamoDBTable from '@/components/GetTable'
import Image from 'next/image'
import profilePic from '/public/dynamodb_logo.png'
import Link from 'next/link'

export default function DynamoDBPage() {
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
      <DynamoDBTable />
    </div>
  )
}
