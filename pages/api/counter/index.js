import dbConnect from "@/db/connect";
import Entry from "@/db/models/Entry";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const entryCount = await Entry.countDocuments();
      response.status(200).json(entryCount);
      return;
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: "Internal Server Error." });
    return;
  }
  response.status(405).json({ status: "Method not allowed." });
}
