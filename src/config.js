
import dotenv from "dotenv";
export const PORT = process.env.PORT ||4000;



dotenv.config(); // Cargar variables de entorno desde el archivo .env

export const TOKEN_SECRET = process.env.TOKEN_SECRET; // Asegúrate de que TOKEN_SECRET esté en el archivo .env

export const FRONTEND_URL = process.env.FRONTEND_URL || "https://mern-stack-crud-with-jwt-1.onrender.com";