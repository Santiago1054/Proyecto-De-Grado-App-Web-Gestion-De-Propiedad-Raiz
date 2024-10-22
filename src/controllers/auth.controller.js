import user from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const userFound = await user.findOne({ email });
    if (userFound) return res.status(400).json(["The email is already in use"]);

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new user({
      username,
      email,
      password: passwordHash,
    });
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await user.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie('token', token, {
      httpOnly: true, // Evita que el frontend acceda a la cookie
      secure: true, // Usar solo en HTTPS (quita esto para desarrollo)
      sameSite: 'lax', // Controla cuándo enviar la cookie (ajústalo según tus necesidades)
      maxAge: 24 * 60 * 60 * 1000, // Expira en 1 día
    });
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await user.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "User not found" });
  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
  res.send("profile");
};

// Verify JWT token
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, TOKEN_SECRET, async (error, decoded) => {
    if (error) return res.status(401).json({ message: "Invalid token" });

    try {
      const userFound = await user.findById(decoded.id);
      if (!userFound)
        return res.status(404).json({ message: "User not found" });

      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
};
