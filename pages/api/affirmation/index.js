import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export default async function handler(request, response) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Generate a single short affirmation for a mental health app called ember. 

Requirements:
- Lowercase only
- 1-2 sentences max
- Conversational tone, like a friend speaking
- Never pushy or cliché
- Acknowledge that small efforts matter
- Honest and grounded

Just respond with the affirmation, nothing else.`;

    const result = await model.generateContent(prompt);
    const affirmation = result.response.text();

    response.status(200).json({ affirmation });
    return;
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to generate affirmation" });
    return;
  }
}
