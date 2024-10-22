import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";

export async function createAccessToken(payload) {
  try {
    const token = await jwt.sign(
      payload,
      TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    return token;
  } catch (err) {
    throw new Error(err); // Manejo de errores
  }
}
