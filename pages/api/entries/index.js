import dbConnect from "@/db/connect";
import Entry from "@/db/models/Entry";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
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
      const entries = await Entry.find({ owner: userId }).sort({
        updatedAt: -1,
      });
      response.status(200).json(entries);
      return;
    }

    if (request.method === "POST") {
      const entryData = request.body;
      await Entry.create({ ...entryData, owner: userId });

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
