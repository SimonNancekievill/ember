import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export default async function handler(request, response) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

    const prompt = `Generate one short affirmation. Requirements:
- Lowercase only
- ONE sentence max, under 10 words
- Simple and direct
- Like a friend speaking
- Never metaphorical or trying too hard
- Honest about small efforts mattering

Examples of good tone: "you're still here. that's enough." or "what you did today matters."

Just output the affirmation, nothing else.`;

    const result = await model.generateContent(prompt);
    const affirmation = result.response.text();

    response.status(200).json({ affirmation });
    return;
  } catch (error) {
    console.error("Affirmation error:", error.message);
    console.error("Full error:", error);
    response.status(500).json({ error: "Failed to generate affirmation" });
    return;
  }
}
