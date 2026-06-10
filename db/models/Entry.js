import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema(
  {
    activities: [
      {
        name: { type: String, required: true },
        category: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;
