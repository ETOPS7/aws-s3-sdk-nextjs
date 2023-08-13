import React from 'react'
import DynamoDBTable from '/src/components/GetTable'
import Image from 'next/image'
import profilePic from '/public/dynamodb_logo.png'
import NextLink from 'next/link'
import { Link } from '@nextui-org/react'

export default function DynamoDBPage() {
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
      <DynamoDBTable />
    </div>
  )
}
