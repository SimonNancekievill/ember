import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function handler(request, response) {
  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 100,
      messages: [
        {
          role: "user",
          content: `Generate a single short affirmation for a mental health app called ember. 

Requirements:
- Lowercase only
- 1-2 sentences max
- Conversational tone, like a friend speaking
- Never pushy or cliché
- Acknowledge that small efforts matter
- Honest and grounded

Just respond with the affirmation, nothing else.`,
        },
      ],
    });
    const affirmation = message.content[0].text;
    response.status(200).json({ affirmation });
    return;
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to generate affirmation" });
    return;
  }
}
