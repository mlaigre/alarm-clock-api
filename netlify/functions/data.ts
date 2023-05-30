import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions"
import { differenceInMinutes, isAfter, subHours } from "date-fns";
import { db } from "../db";

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const color = await getColor()
    return {
        statusCode: 200,
        body: JSON.stringify({ color }),
    }
}

async function getColor() {
    const data = await db()
        .then(collection => collection.findOne())
    const currentTime = new Date()
    const wakingTime = new Date(data.wakingTime)
    console.log(differenceInMinutes(currentTime, wakingTime))
    return isAfter(currentTime, subHours(wakingTime, 1)) ? '3B240B' : '000000'
}