import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import "./Catalogo.css";

const Catalogo = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  const obtenerProductos = async () => {
    try {
      const query = new URLSearchParams();
      if (busqueda) query.append("busqueda", busqueda);
      if (categoria) query.append("categoria", categoria);

      const { data } = await API.get(`/productos?${query.toString()}`);
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener productos", error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, [busqueda, categoria]);

  return (
    <div className="catalogo-container">
      <h1>Catálogo de Productos</h1>

      <div className="catalogo-filtros">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Todas las categorías</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Hogar">Hogar</option>
          <option value="Ropa">Ropa</option>
        </select>
      </div>

      <div className="catalogo-grid">
        {productos.map((prod) => (
          <div className="producto-card" key={prod._id}>
            <img src={prod.imagenUrl} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>${prod.precio}</p>
            <Link to={`/producto/${prod._id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
