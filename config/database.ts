import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async (): Promise<void> => {
  await mongoose.connect(process.env.MONGO_URI as string);
  console.log("Connected to MongoDB", mongoose.connection.name);
};

export default dbConnect;
