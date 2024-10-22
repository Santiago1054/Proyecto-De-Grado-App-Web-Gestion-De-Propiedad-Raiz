import { z } from "zod";
export const createTaskSchema = z.object({
  departamento: z.string({
    required_error: "Nombre de departamento es requerido"
  }),
  municipio: z.string({
    required_error: "Nombre de municipio es requerido"
  }),
  barrio: z.string({
    required_error: "Nombre de barrio es requerido"
  }),
  direccionHogar: z.string({
    required_error: "La direccion es requerida"
  }),
  historial: z.string({
    required_error: "Historial debe ser tipo string"
  }),
  date: z.string({}).datetime().optional(),
  propietario: z.string({
    required_error: "Se requiere el nombre del propietario"
  }),
  inquilinos: z.string({
    required_error: "Se requiere el nombre del inquilino"
  })
});