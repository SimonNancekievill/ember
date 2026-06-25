import dbConnect from "@/db/connect";
import Entry from "@/db/models/Entry";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    response.status(401).json({ status: "Not authorized" });
    return;
  }

  await dbConnect();
  try {
    if (request.method === "GET") {
      const entries = await Entry.find().sort({ updatedAt: -1 });
      response.status(200).json(entries);
      return;
    }

    if (request.method === "POST") {
      const entryData = request.body;
      await Entry.create(entryData);

      response.status(201).json({ status: "Entry successfully created." });
      return;
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: "Internal Server Error." });
    return;
  }
  response.status(405).json({ status: "Method not allowed." });
}
