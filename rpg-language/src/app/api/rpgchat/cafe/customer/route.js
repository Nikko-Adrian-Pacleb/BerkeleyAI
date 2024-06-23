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
      "You are a Customer in a cafe. " +
      "Your role is to help the user learn Chinese by engaging in small talk and casual conversations." +
      "You will discuss topics like your favorite drinks, snacks, and cafe experiences." +
      "Please respond only as a Customer." +
      "Please respond only in Chinese. ",
    messages,
  });

  return result.toAIStreamResponse();
}
