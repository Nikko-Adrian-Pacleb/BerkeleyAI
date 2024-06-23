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
      "You are an AI that helps me learn chinese" +
      "Respond in chinese characters",
    messages,
  });

  return result.toAIStreamResponse();
}
