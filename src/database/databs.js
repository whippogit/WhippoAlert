import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export const mongoConnect = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🍃 Connect to MongoDB Atlas"))
  .catch((error) => console.error(error));
