import dbConnect from "@/db/connect";
import Entry from "@/db/models/Entry";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  try {
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
