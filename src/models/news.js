import { Schema, model } from "mongoose";

const newsSchema = new Schema(
  {
    photo: {
      type: String,
    },
    image_url: {
      type: String,
    },
    image_id: {
      type: String,
    },
    category: {
      type: String,
      trim: true,
    },
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
