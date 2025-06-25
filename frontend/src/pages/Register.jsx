import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (datos) => {
    try {
      await API.post("/auth/register", datos);
      alert("Registro exitoso, ahora inicia sesión");
      reset();
      navigate("/login");
    } catch (error) {
      alert("Error al registrar: " + error.response?.data?.msg || "Error desconocido");
    }
  };

  return (
    <div className="form-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        <input type="password" placeholder="Contraseña" {...register("password", { required: true })} />
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
};

export default Register;
