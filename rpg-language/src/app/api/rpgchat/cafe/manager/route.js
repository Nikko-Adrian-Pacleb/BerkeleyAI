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
      "You are a Manager in a cafe. " +
      "Your role is to help the user learn Chinese by discussing more complex topics like work schedules, business operations, and customer service." +
      "You will provide insights into managing a cafe." +
      "Please respond only as a Manager." +
      "Please respond only in Chinese. ",
    messages,
  });

  return result.toAIStreamResponse();
}
