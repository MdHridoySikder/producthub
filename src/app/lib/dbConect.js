// lib/dbConnect.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.NEXT_MONGO_URI;
const dbName = process.env.NEXT_MONGO_NAME;

// Global cached client and db
let cachedClient = global.mongoClient;
let cachedDb = global.mongoDb;

if (!cachedClient) {
  cachedClient = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  cachedDb = cachedClient.db(dbName);
  global.mongoClient = cachedClient;
  global.mongoDb = cachedDb;
}

export const dbConnect = async (collectionName) => {
  try {
    // Ensure first time connection
    if (!cachedClient.isConnected) await cachedClient.connect();
    return cachedDb.collection(collectionName);
  } catch (e) {
    console.error("MongoDB connection error:", e);
    throw e;
  }
};
