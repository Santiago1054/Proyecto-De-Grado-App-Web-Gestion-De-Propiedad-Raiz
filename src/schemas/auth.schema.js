import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "La contraseña debe tener por lo menos 6 caracteres.",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Se requiere de un correo",
    })
    .email({
      message: "Correo o contraseña incorrecta",
    }),

  password: z
    .string({
      required_error: "Se requiere de una contraseña",
    })
    .min(6, {
      message: "Correo o contraseña incorrecta",
    }),
});
