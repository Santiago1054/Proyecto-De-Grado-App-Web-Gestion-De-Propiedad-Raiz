import Task from "../models/task.model.js";
//import multer from 'multer';
//import shortid from 'shortid';
//import { multerConfig } from '../utils/multerConfig.js';

//const upload = multer(multerConfig).single('image');

/*fileUpload = (req, res, next) => {
   upload(req, res, function(error) {
    if (error) {
        res.json({ message: error});
    }
    return next();
   }) 
}*/

export const getTasks = async (req, res) => {
  const token = await createAccessToken({ id: userFound._id });
  try {
    res.cookie('token', token, {
      httpOnly: true,    // La cookie no es accesible desde JavaScript en el cliente
      secure: process.env.NODE_ENV === 'production', // Usar solo en HTTPS en producción
      sameSite: 'lax',   // O 'none' si frontend y backend están en dominios diferentes
      maxAge: 24 * 60 * 60 * 1000, // 1 día
    });
    const tasks = await Task.find({
      user: req.user.id,
    }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const {
      doc,
      imagen,
      departamento,
      municipio,
      barrio,
      direccionHogar,
      historial,
      date,
      propietario,
      propietarioNumero,
      propietarioEmail,
      inquilinos,
      inquilinosNumero,
      inquilinosEmail,
    } = req.body;
    console.log(req.user);
    const newTask = new Task({
      doc,
      imagen,
      departamento,
      municipio,
      barrio,
      direccionHogar,
      historial,
      date,
      propietario,
      propietarioNumero,
      propietarioEmail,
      inquilinos,
      inquilinosNumero,
      inquilinosEmail,
      user: req.user.id,
    });
    /*if (req.file && req.file.filename){
          newTask.img = req.file.filename;
      }*/
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};
