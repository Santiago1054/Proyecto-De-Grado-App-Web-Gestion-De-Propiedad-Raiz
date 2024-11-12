import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
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
      certify,
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
      certify,
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
