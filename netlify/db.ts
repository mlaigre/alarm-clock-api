import { MongoClient } from 'mongodb'

export async function db() {
    const mongoUrl = process.env.DB_URL
    const mongoClient = await new MongoClient(mongoUrl).connect()
    const db = mongoClient.db()
    return db.collection<{
        color: string
    }>('Color')
}