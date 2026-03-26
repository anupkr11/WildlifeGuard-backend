import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
  await mongoose.connect(
    process.env.mongoURI,
  );
  console.log("Connected to MongoDB", mongoose.connection.name);
};

export default dbConnect;

