import React, { useState } from 'react'
import { lambdaClient } from '/src/sdk/lambdaClient'
import { InvokeCommand } from '@aws-sdk/client-lambda'

import Image from 'next/image'
import profilePic from '/public/lambda_logo.png'
import {Link} from "@nextui-org/react";
import NextLink from "next/link";
import { Button } from '@nextui-org/react'

export default function LambdaPage() {
  const [response, setResponse] = useState(null)
  const [status, setStatus] = useState(null)

  const fetchData = async () => {
    setStatus('loading')
    const params = {
      FunctionName: 'myLambda',
      Payload: JSON.stringify({ key: 'value' }),
    }

    const command = new InvokeCommand(params)

    try {
      const response = await lambdaClient.send(command)
      const payload = JSON.parse(new TextDecoder().decode(response.Payload))
      console.log(payload.body)
      setResponse(payload.body)
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

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
      <div className="flex items-center justify-center mb-5">
        <Button color="warning" variant="flat" onClick={fetchData}>
          Send Request to AWS Lambda Function
        </Button>
      </div>
      <div className="text-center mt-5">
        {status === 'success' ? (
          <span className="text-green-500">Function is available</span>
        ) : status === 'error' ? (
          <span className="text-red-500">Function is not available</span>
        ) : null}
      </div>
      <p className="text-center">
        {response && `Response from function: ${response}`}
      </p>
    </div>
  )
}
