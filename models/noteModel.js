import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "A user ID is required for note creation"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
