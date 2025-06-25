import Producto from "../models/Producto.js";

export const obtenerProductos = async (req, res) => {
  const { busqueda, categoria } = req.query;
  const filtro = {};
  if (busqueda) filtro.nombre = { $regex: busqueda, $options: "i" };
  if (categoria) filtro.categoria = categoria;

  const productos = await Producto.find(filtro).populate("usuario", "nombre");
  res.json(productos);
};

export const obtenerProductoPorId = async (req, res) => {
  const producto = await Producto.findById(req.params.id).populate("usuario", "nombre");
  if (!producto) return res.status(404).json({ msg: "Producto no encontrado" });
  res.json(producto);
};

export const crearProducto = async (req, res) => {
  const producto = new Producto({ ...req.body, usuario: req.usuario.id });
  await producto.save();
  res.json(producto);
};

export const obtenerMisProductos = async (req, res) => {
  const productos = await Producto.find({ usuario: req.usuario.id });
  res.json(productos);
};
