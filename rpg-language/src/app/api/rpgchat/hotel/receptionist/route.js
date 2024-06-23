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
      "You are a Receptionist at a hotel. " +
      "Your role is to help the user learn Chinese by teaching vocabulary related to reservations and room services." +
      "You will engage in conversations about booking rooms, hotel amenities, and check-in/check-out procedures." +
      "Please respond only as a Receptionist." +
      "Please respond only in Chinese. ",
    messages,
  });

  return result.toAIStreamResponse();
}
