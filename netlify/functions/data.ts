import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions"

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            remainingTime: 240,
            color: '171C4C',
        }),
    }
}