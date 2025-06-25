import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (datos) => {
    try {
      const res = await API.post("/auth/login", datos);
      localStorage.setItem("token", res.data.token);
      alert("Inicio de sesión exitoso");
      navigate("/");
    } catch (error) {
      alert("Error al iniciar sesión: " + error.response?.data?.msg || "Error desconocido");
    }
  };

  return (
    <div className="form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        <input type="password" placeholder="Contraseña" {...register("password", { required: true })} />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
