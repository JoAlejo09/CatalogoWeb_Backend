import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const AgregarProducto = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await API.post("/productos", data); // el token ya va en el interceptor
      alert("Producto agregado con éxito");
      reset();
      navigate("/");
    } catch (error) {
      alert("Error al agregar producto: " + (error.response?.data?.msg || "Error desconocido"));
    }
  };

  return (
    <div className="form-container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
        <textarea placeholder="Descripción" {...register("descripcion", { required: true })}></textarea>
        <input type="number" step="0.01" placeholder="Precio" {...register("precio", { required: true })} />
        <input type="text" placeholder="URL de la imagen" {...register("imagenUrl", { required: true })} />
