import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import "./ProductoDetalle.css";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const { data } = await API.get(`/productos/${id}`);
        setProducto(data);
      } catch (error) {
        console.error("Error al cargar producto", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProducto();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <img src={producto.imagenUrl} alt={producto.nombre} />
        <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p className="precio">${producto.precio}</p>
          <p><strong>Categoría:</strong> {producto.categoria}</p>
          <p>{producto.descripcion}</p>
          {producto.usuario && (
            <p><strong>Publicado por:</strong> {producto.usuario.nombre}</p>
          )}
          <Link to="/" className="btn-volver">← Volver al catálogo</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
