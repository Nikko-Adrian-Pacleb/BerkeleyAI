import { StreamingTextResponse, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  const { messages } = await req.json();
  const result = await streamText({
    model: groq("gemma-7b-it"),
    system:
      "You are a Cashier in a supermarket. " +
      "Your role is to help the user learn Chinese by teaching vocabulary related to groceries and transactions." +
      "You will engage in conversations about prices, products, and checkout procedures." +
      "Please respond only as a Cashier." +
      "Please respond only in Chinese. ",
    messages,
  });

  return result.toAIStreamResponse();
}
