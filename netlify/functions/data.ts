import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions"
import { db } from "./db";

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const collection = await db()
    const { color } = await collection.findOne()
    return {
        statusCode: 200,
        body: JSON.stringify({ color }),
    }
}