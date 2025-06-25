import Usuario from "../models/Usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { nombre, email, password } = req.body;
  const existe = await Usuario.findOne({ email });
  if (existe) return res.status(400).json({ msg: "Usuario ya registrado" });

  const hash = await bcrypt.hash(password, 10);
  const nuevoUsuario = new Usuario({ nombre, email, password: hash });
  await nuevoUsuario.save();

  res.json({ msg: "Usuario registrado correctamente" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ email });
  if (!usuario) return res.status(404).json({ msg: "Usuario no encontrado" });

  const ok = await bcrypt.compare(password, usuario.password);
  if (!ok) return res.status(401).json({ msg: "Contraseña incorrecta" });

  const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

  res.json({
    token,
    usuario: {
      id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
    }
  });
};
