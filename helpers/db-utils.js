import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
  const client = await new MongoClient('mongodb+srv://aavery:2scTYFsFpLZvqDeYuNc4@cluster0.unfjpd2.mongodb.net/?retryWrites=true&w=majority').connect();

  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db('events');

  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (client, collection, sort) => {
  const db = client.db('events');

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};
