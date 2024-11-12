import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors";
import path from 'path';
import { dirname } from 'path';

// Obtener el valor de __dirname
const __dirname = dirname(__filename);

const app = express();

// Configuración de CORS
app.use(
  cors({
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Esto permite el envío de cookies
    origin: "https://easifyview.onrender.com", // Cambia esta URL si es necesario
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Rutas de la API
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

// Servir archivos estáticos en producción
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'agent/dist'))); // Ajusta esta ruta si es necesario

  // Cualquier ruta que no pertenezca a la API debe redirigir a index.html para que React Router maneje las rutas
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'agent/dist', 'index.html')); // Asegúrate de que la ruta sea correcta
  });
}

export default app;
