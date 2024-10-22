import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  departamento: {
    type: String,
    required: true
  },
  municipio: {
    type: String,
    required: true
  },
  barrio: {
    type: String,
    required: true
  },
  direccionHogar: {
    type: String,
    required: true
  },
  historial: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  propietario: {
    type: String,
    required: true
  },
  propietarioNumero: {
    type: String,
    required: true
  },
  propietarioEmail: {
    type: String,
    required: true
  },
  inquilinos: {
    type: String,
    required: true
  },
  inquilinosNumero: {
    type: String,
    required: true
  },
  inquilinosEmail: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  doc: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});
export default mongoose.model("Task", taskSchema);