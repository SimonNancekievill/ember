import dbConnect from "@/db/connect";
import Entry from "@/db/models/Entry";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const entries = await Entry.find().sort({ updatedAt: -1 });
      response.status(200).json(entries);
      return;
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: "Internal Server Error." });
    return;
  }
  response.status(405).json({ status: "Method not allowed." });
}
