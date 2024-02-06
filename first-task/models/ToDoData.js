import mongoose, { Schema } from "mongoose";

const toDoSchema = new Schema(
  {
    title: String,
    description: String,
    date: Date,
    status: String,
  },
  { timestamps: true }
);
const toDoDB = mongoose.models.toDoDB || mongoose.model("toDoDB", toDoSchema);
export default toDoDB;  

