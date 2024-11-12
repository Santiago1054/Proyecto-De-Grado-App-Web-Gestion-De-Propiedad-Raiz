
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

if (process.env.NODE_ENV === "production") {
 
  app.use(express.static("agent/dist"));


}
// Rutas de la API (por ejemplo, prefijadas con /api)
app.use('/api', require('./routes/api'));  // Asegúrate de prefijar tus rutas API con /api

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'client/build')));

// Ruta de redirección para las demás rutas no API, enviándolas a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'https://easifyview.onrender.com'));
});

export default app;