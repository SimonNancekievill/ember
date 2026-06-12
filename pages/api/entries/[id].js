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
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: "Internal Server Error." });
  }

  response.status(405).json({ status: "Method not allowed." });
}
