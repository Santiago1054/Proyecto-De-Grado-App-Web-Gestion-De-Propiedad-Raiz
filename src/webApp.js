import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors";

const app = express();

// Configuración de __dirname en un módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
    origin: "https://easifyview.onrender.com/api",
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Rutas de la API
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

// Configuración para producción
if (process.env.NODE_ENV === "production") {
  // Servir archivos estáticos de React
  app.use(express.static(path.join(__dirname, "agent/dist")));

  // Redirigir todas las demás rutas a index.html para que React las maneje
  app.get("*", (req, res) => {
    if (!req.originalUrl.startsWith("/api")) {
      res.sendFile(path.join(__dirname, "agent/dist", "index.html"));
    } else {
      res.status(404).json({ message: "API route not found" });
    }
  });
}

export default app;
