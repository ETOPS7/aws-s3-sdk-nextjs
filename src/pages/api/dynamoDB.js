import { client } from '@/sdk/dynamodbClient';
import {
  ScanCommand,
  PutItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} from '@aws-sdk/client-dynamodb';

export default async function handler(req, res) {
  const TableName = process.env.NEXT_PUBLIC_DYNAMODB_TABLE_NAME;

  try {
    if (req.method === 'GET') {
      const { Items } = await client.send(new ScanCommand({ TableName }));
      return res.status(200).json({ tableName: TableName, data: Items });
    }

    if (req.method === 'POST') {
      const { Item } = req.body;
      await client.send(new PutItemCommand({ TableName, Item }));
      return res.status(201).json({ message: 'Item created successfully' });
    }

    if (req.method === 'PUT') {
      const { Key, UpdateExpression, ExpressionAttributeValues } = req.body;
      await client.send(new UpdateItemCommand({ TableName, Key, UpdateExpression, ExpressionAttributeValues }));
      return res.status(200).json({ message: 'Item updated successfully' });
    }

    if (req.method === 'DELETE') {
      const { Key } = req.body;
      await client.send(new DeleteItemCommand({ TableName, Key }));
      return res.status(200).json({ message: 'Item deleted successfully' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
