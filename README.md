# 🗂️ AWS SDK v3: S3 Bucket & DynamoDB with NEXT.js

This is a [Next.js](https://nextjs.org/) boilerplate demonstrating how to organize upload, download, and delete files from your AWS S3 Bucket, as well as how to work with DynamoDB. It also utilizes the fast and modern React UI library, [NEXT UI](https://nextui.org/), and [Tailwind CSS](https://tailwindcss.com/). You can learn more about AWS S3 [here](https://aws.amazon.com/s3/) and about DynamoDB [here](https://aws.amazon.com/dynamodb/).

![AWS S3 & DynamoDB with Next.js](./public/aws_next_baner.png)

## Getting Started

### Prerequisites

Before you begin, you will need to register an account with AWS and set up an S3 Bucket and DynamoDB. Fill in your credentials in the `.env` file as follows:

```env
NEXT_PUBLIC_ACCESS_KEY=your-access-key
NEXT_PUBLIC_SECRET_ACCESS_KEY=your-secret-access-key
NEXT_PUBLIC_REGION=your-region
NEXT_PUBLIC_BUCKET_NAME=your-bucket-name
NEXT_PUBLIC_DYNAMODB_TABLE_NAME=your-table-name
```

**Running the Development Server**

First, run the development server:

```zsh
npm i
npm run dev
```

AWS S3 and DynamoDB Configuration
Make sure to configure your AWS S3 and DynamoDB credentials properly in `/sdk`. You can find detailed instructions on how to do this in the official AWS S3 and DynamoDB documentation.

Features
🗳️ Upload files to S3  
📂 Download files from S3  
❌ Delete files from S3  
📊 Work with tables in DynamoDB  

Feel free to contribute to this project by submitting issues, pull requests, or providing feedback.

## ⚠️ Attention!

This is a boilerplate designed for direct client-side operations with AWS services, including S3 Bucket and DynamoDB. While this approach provides flexibility, please be aware that storing credentials on the client side can be insecure. It may expose sensitive information to malicious users. Always follow best practices for security and consider using server-side operations or AWS Identity and Access Management (IAM) roles to handle credentials and sensitive operations.

