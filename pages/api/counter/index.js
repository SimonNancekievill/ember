import dbConnect from "@/db/connect";
import Entry from "@/db/models/Entry";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = getServerSession(request, response, authOptions);

  if (!session) {
    response.status(401).json({ status: "Not authorized" });
    return;
  }
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
