import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Easify:GnaB8p8COEqrDb43@cluster0.djocl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("-> Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};
