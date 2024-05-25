import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5"
    );
    console.log("-> Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};
