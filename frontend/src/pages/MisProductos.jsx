import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import "./MisProductos.css";

const MisProductos = () => {
  const [misProductos, setMisProductos] = useState([]);

  const cargarMisProductos = async () => {
    try {
      const { data } = await API.get("/productos/mios");
      setMisProductos(data);
    } catch (error) {
      alert("Error al cargar tus productos. ¿Estás logueado?");
    }
  };

  useEffect(() => {
    cargarMisProductos();
  }, []);

  return (
    <div className="mis-productos-container">
      <h2>Mis Productos</h2>

      {misProductos.length === 0 ? (
        <p>No has publicado productos todavía.</p>
      ) : (
        <div className="mis-productos-grid">
          {misProductos.map((prod) => (
            <div className="producto-card" key={prod._id}>
              <img src={prod.imagenUrl} alt={prod.nombre} />
              <h3>{prod.nombre}</h3>
              <p>${prod.precio}</p>
              <Link to={`/producto/${prod._id}`}>Ver detalle</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MisProductos;
