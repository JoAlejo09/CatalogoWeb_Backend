import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [logeado, setLogeado] = useState(false);

  useEffect(() => {
    setLogeado(!!localStorage.getItem("token"));
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setLogeado(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">🛍️ Catálogo</Link>

      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>

        {logeado ? (
          <>
            <Link to="/agregar">Agregar</Link>
            <Link to="/mios">Mis productos</Link>
            <button onClick={cerrarSesion}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
