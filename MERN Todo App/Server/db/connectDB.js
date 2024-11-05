import mongoose from "mongoose";

async function connectDB(DATABASE_URL) {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("DataBase Connected");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
