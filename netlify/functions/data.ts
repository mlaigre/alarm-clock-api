import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions"
import { db } from "../db";

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const collection = await db()
    const value = await collection.findOne()
    console.log(value)
    const { color } = value
    return {
        statusCode: 200,
        body: JSON.stringify({ color }),
    }
}