import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String },
    owner: { type: String, required: true },
  },
  { timestamps: true }
);

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;
