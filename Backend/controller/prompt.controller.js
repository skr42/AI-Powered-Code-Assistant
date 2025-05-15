import OpenAI from "openai";
import { Promt } from "../model/prompt.model.js";

const openai = new OpenAI({
  baseURL: "https://api.aimlapi.com/v1",
  apiKey: process.env.OPENAI_API_KEY,
});

export const sendPromt = async (req, res) => {
  const { content } = req.body;
  const userId = req.userId;

  if (!content || content.trim() === "") {
    return res.status(400).json({ errors: "Prompt content is required" });
  }

  try {
    // Save user prompt
    const userPrompt = await Promt.create({
      userId,
      role: "user",
      content,
    });

    // Send to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: content,
        },
      ],
    });

    const aiContent = response.choices[0].message.content;

    // Save assistant response
    const aiMessage = await Promt.create({
      userId,
      role: "assistant",
      content: aiContent,
    });

    return res.status(200).json({ reply: aiContent });
  } catch (error) {
    console.error("Error in Prompt:", error);
    return res.status(500).json({
      error: "Something went wrong with the AI response",
    });
  }
};
