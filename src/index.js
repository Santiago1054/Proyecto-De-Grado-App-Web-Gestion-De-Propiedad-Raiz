import app from "./webApp.js";
//  import { PORT } from "./config.js";
import { connectDB } from "./db.js";
async function main() {
  try {
    await connectDB();
    app.listen(4000);
    console.log(`Listening on port http://localhost:${4000}`);
    //  console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();

console.log("server on port", 4000);
