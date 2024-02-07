import mongoose, { Schema } from "mongoose";

const toDoSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    title: String,
    description: String,
    status: String,
  },
  { timestamps: true }
);
const toDoDB = mongoose.models.toDoDB || mongoose.model("toDoDB", toDoSchema);
export default toDoDB;
