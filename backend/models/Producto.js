import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  imagenUrl: String,
  categoria: String,
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }
});

export default mongoose.model("Producto", productoSchema);
