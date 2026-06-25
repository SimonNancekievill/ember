import dbConnect from "@/db/connect";
import Entry from "@/db/models/Entry";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    response.status(401).json({ status: "Not authorized" });
    return;
  }
  const token = await getToken({ req: request });
  const userId = token?.sub;
  await dbConnect();

  try {
    if (request.method === "GET") {
      const entryCount = await Entry.countDocuments({ owner: userId });
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
