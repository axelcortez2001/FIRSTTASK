import mongoose, { Schema } from "mongoose";

const toDoSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    stat: { type: String, required: true },
  },
  { timestamps: true }
);
const toDoDB = mongoose.models.toDoDB || mongoose.model("toDoDB", toDoSchema);
export default toDoDB;
