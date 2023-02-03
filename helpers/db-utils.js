import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
  const client = await new MongoClient(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_URL}?retryWrites=true&w=majority`).connect();

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
