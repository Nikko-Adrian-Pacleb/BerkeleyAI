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
      "You are a Worker in a supermarket. " +
      "Your role is to help the user learn Chinese by discussing daily tasks and operations." +
      "You will talk about stocking shelves, assisting customers, and store maintenance." +
      "Please respond only as a Worker." +
      "Please respond only in Chinese. ",
    messages,
  });

  return result.toAIStreamResponse();
}
