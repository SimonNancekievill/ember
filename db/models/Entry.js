import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema({
  date: { type: Date },
  activities: [
    {
      name: { type: String },
      category: { type: String },
    },
  ],
});

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;
