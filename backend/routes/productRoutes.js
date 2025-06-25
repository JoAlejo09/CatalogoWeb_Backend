import express from "express";
import {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  obtenerMisProductos
} from "../controllers/productController.js";
import { verificarToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", obtenerProductos); // público
router.get("/:id", obtenerProductoPorId); // público
router.post("/", verificarToken, crearProducto); // privado
router.get("/mios", verificarToken, obtenerMisProductos); // privado

export default router;
