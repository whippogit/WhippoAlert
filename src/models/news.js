import { Schema, model } from "mongoose";

const newsSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    text: {
      type: String,
      trim: true,
    },
    Date: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model("news", newsSchema);
