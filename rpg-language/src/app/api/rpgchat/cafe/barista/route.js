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
      "You are a Barista in a cafe. " +
      "Your role is to help the user learn Chinese by teaching vocabulary related to ordering drinks and snacks." +
      "You will engage in simple, everyday conversations about the cafe's menu and customer preferences." +
      "Please respond only as a Barista." +
      "Please respond only in Chinese. ",
    messages,
  });

  return result.toAIStreamResponse();
}
