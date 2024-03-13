import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const PeliculaDetalles = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pelicula, setPelicula] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({
    titulo: "",
    genero: "",
    año: "",
    descripcion: "",
    imagen_url: "",
  });

  // Hook de efecto para cargar los detalles de una película específica al montar el componente o cuando cambie el ID
  useEffect(() => {
    const fetchPelicula = async () => {
      try {
        // Realiza una solicitud GET para obtener los detalles de una película por su ID
        const { data } = await axios.get(
          `http://localhost:8800/peliculas/${id}`
        );
        // Actualiza el estado con los datos de la película obtenida
        setPelicula(data);
        // Establece los datos de la película en el estado de edición para poder modificarlos
        setEditData(data);
      } catch (err) {
        // Manejo de errores en caso de fallo de la solicitud
        console.error(err);
      }
    };

    // Llama a la función fetchPelicula
    fetchPelicula();
  }, [id]); 

  // Función para manejar el click en el botón de modificar, muestra el modal de edición
  const handleModificarClick = () => {
    setShowModal(true);
  };

  // Función para manejar el click en el botón de eliminar
  const handleEliminarClick = async () => {
    try {
      // Realiza una solicitud DELETE para eliminar la película por su ID
      await axios.delete(`http://localhost:8800/peliculas/${id}`);
      // Redirige al usuario a la página de inicio tras la eliminación
      navigate("/");
    } catch (err) {
      // Manejo de errores en caso de fallo de la solicitud
      console.error(err);
    }
  };

  // Función para actualizar el estado con los valores modificados en el formulario de edición
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Función para manejar el envío del formulario de edición
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    try {
      // Realiza una solicitud PUT para actualizar la película con los nuevos datos
      await axios.put(`http://localhost:8800/peliculas/${id}`, editData);
      // Oculta el modal de edición tras la actualización exitosa
      setShowModal(false);
      // Actualiza el estado de la película con los nuevos datos
      setPelicula(editData);
    } catch (err) {
      console.error(err);
    }
  };

  // Renderiza un spinner de carga mientras los datos de la película se están cargando
  if (!pelicula)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pelicula.imagen_url}
            alt={pelicula.titulo}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>{pelicula.titulo}</h1>
          <p>Género: {pelicula.genero}</p>
          <p>Año: {pelicula.año}</p>
          <p>Descripción: {pelicula.descripcion}</p>
          <button className="btn btn-primary" onClick={handleModificarClick}>
            Modificar
          </button>
          <button className="btn btn-danger ml-2" onClick={handleEliminarClick}>
            Eliminar
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Película</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Título</label>
                    <input
                      type="text"
                      className="form-control"
                      name="titulo"
                      value={editData.titulo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Género</label>
                    <input
                      type="text"
                      className="form-control"
                      name="genero"
                      value={editData.genero}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Año</label>
                    <input
                      type="number"
                      className="form-control"
                      name="año"
                      value={editData.año}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Descripción</label>
                    <textarea
                      className="form-control"
                      name="descripcion"
                      value={editData.descripcion}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>URL de la Imagen</label>
                    <input
                      type="text"
                      className="form-control"
                      name="imagen_url"
                      value={editData.imagen_url}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success">
                    Guardar Cambios
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeliculaDetalles;
