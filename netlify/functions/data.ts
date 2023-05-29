import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions"
import { differenceInMinutes, isAfter, subHours } from "date-fns";

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const currentTime = new Date()
    const wakingTime = new Date('2023-05-30 07:00:00')
    console.log(differenceInMinutes(currentTime, wakingTime));
    const color = isAfter(currentTime, subHours(wakingTime, 1)) ? '3B240B' : '000000'
    return {
        statusCode: 200,
        body: JSON.stringify({ color }),
    }
}