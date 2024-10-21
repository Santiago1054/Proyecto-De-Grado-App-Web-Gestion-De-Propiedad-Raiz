import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://mongo:OIYjCnUzKKWXvOmzzTxesjRVdCNmkoeA@autorack.proxy.rlwy.net:58949"
    );
    console.log("-> Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};
