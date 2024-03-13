import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPelicula = () => {
  const [pelicula, setPelicula] = useState({
    titulo: "",
    genero: "",
    año: "",
    descripcion: "",
    imagen_url: "",
  });
  const navigate = useNavigate();

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    // Actualiza el estado de la película con los nuevos valores.
    // Cada campo del formulario debe tener un atributo 'name' correspondiente a una propiedad de 'pelicula'.
    setPelicula({ ...pelicula, [e.target.name]: e.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      // Envía una solicitud POST al servidor con los datos de la nueva película
      await axios.post("http://localhost:8800/peliculas", pelicula);
      // Navega a la página de inicio (o lista de películas) tras el éxito de la operación
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Añadir Nueva Película</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={pelicula.titulo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genero"
          placeholder="Género"
          value={pelicula.genero}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="año"
          placeholder="Año"
          value={pelicula.año}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={pelicula.descripcion}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagen_url"
          placeholder="URL de la Imagen"
          value={pelicula.imagen_url}
          onChange={handleChange}
          required
        />
        <button type="submit">Añadir Película</button>
      </form>
    </div>
  );
};

export default AddPelicula;
