
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors";

//import { FRONTEND_URL } from "./config.js";


const app = express();

app.use(
  cors({
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Esto permite el envío de cookies\
    origin: "https://easifyview.onrender.com",
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

//if (process.env.NODE_ENV === "production") {
 
  //app.use(express.static("agent/dist"));


//}
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'agent/dist')));

  // Cualquier ruta que no pertenezca a la API debe redirigir a index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'agent/dist', 'index.html'));
  });
}

export default app;