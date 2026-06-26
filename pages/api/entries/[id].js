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
  const token = await getToken({ req: request });
  const userId = token?.sub;

  await dbConnect();
  const { id } = request.query;
  try {
    const entry = await Entry.findById(id);
    if (entry.owner !== userId) {
      return response.status(403).json({ status: "Forbidden." });
    }
    if (request.method === "DELETE") {
      await Entry.findByIdAndDelete(id);
      response.status(200).json({ status: "Successfully deleted." });
      return;
    }
    if (request.method === "PUT") {
      const updatedActivity = request.body;
      await Entry.findByIdAndUpdate(id, updatedActivity);
      response.status(200).json({ status: "Successfully updated." });
      return;
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: "Internal Server Error." });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
