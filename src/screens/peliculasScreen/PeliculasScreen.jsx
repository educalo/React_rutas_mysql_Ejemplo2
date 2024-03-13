import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pelicula from '../../components/PeliculaItem/Pelicula'; 
import './PeliculasScreen.css'; 

const PeliculasScreen = () => {
  const navigate = useNavigate();
  // Estado para controlar la visibilidad del modal de añadir película
  const [showModal, setShowModal] = useState(false);
  // Estado para almacenar y actualizar los datos del formulario de la película
  const [peliculaData, setPeliculaData] = useState({
    titulo: '',
    genero: '',
    año: '',
    descripcion: '',
    imagen_url: ''
  });
  // Estado para almacenar la lista de películas obtenidas del servidor
  const [peliculas, setPeliculas] = useState([]);

  // useEffect para cargar las películas desde el servidor al montar el componente
  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const { data } = await axios.get('http://localhost:8800/peliculas');
        setPeliculas(data); // Actualiza el estado de películas con los datos obtenidos
      } catch (err) {
        console.error(err); // Manejo de errores en la solicitud
      }
    };

    fetchPeliculas(); // Llamada a la función que realiza la solicitud GET
  }, []); 

  // Función para manejar el click en el botón de añadir película
  const handleAddClick = () => {
    setPeliculaData({
      titulo: '',
      genero: '',
      año: '',
      descripcion: '',
      imagen_url: ''
    }); 
    setShowModal(true); 
  };

  // Función para actualizar el estado de peliculaData con los valores del formulario
  const handleChange = (e) => {
    setPeliculaData({ ...peliculaData, [e.target.name]: e.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    try {
      await axios.post(`http://localhost:8800/peliculas`, peliculaData);
      setShowModal(false); // Oculta el modal

      window.location.reload(); // Recarga la página para mostrar los datos actualizados
    } catch (err) {
      console.error(err); 
    }
  };

  // useEffect(() => {
  //   const fetchPeliculas = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8800/peliculas');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setPeliculas(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  
  //   fetchPeliculas();
  // }, []);
  

  return (
    <div className="container mt-5">
      <button className="btn btn-success mb-3" onClick={handleAddClick}>Añadir Nueva Película</button>
      {showModal && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Añadir Nueva Película</h5>
                <button type="button" className="close" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Título</label>
                    <input type="text" className="form-control" name="titulo" value={peliculaData.titulo} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Género</label>
                    <input type="text" className="form-control" name="genero" value={peliculaData.genero} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Año</label>
                    <input type="number" className="form-control" name="año" value={peliculaData.año} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Descripción</label>
                    <textarea className="form-control" name="descripcion" value={peliculaData.descripcion} onChange={handleChange} required></textarea>
                  </div>
                  <div className="form-group">
                    <label>URL de la Imagen</label>
                    <input type="text" className="form-control" name="imagen_url" value={peliculaData.imagen_url} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary">Guardar Película</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <h1>Películas</h1>
      <div className="peliculas-grid">
        {peliculas.map((pelicula) => (
          <Pelicula key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    </div>
  );
};

export default PeliculasScreen;


// USANDO FECTH
// const fetchData = async () => {
//   try {
//     const response = await fetch('http://localhost:8800/api/recurso');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json(); // asumiendo que el servidor devuelve JSON
//     console.log(data); // Haz algo con los datos
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// fetchData();

// const crearRecurso = async () => {
//   try {
//     const response = await fetch('http://localhost:8800/api/recurso', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         nombre: 'Nuevo Recurso',
//         descripcion: 'Descripción del nuevo recurso',
//       }),
//     });
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json(); // asumiendo que el servidor devuelve JSON
//     console.log('Recurso creado:', data);
//   } catch (error) {
//     console.error('Error creating data:', error);
//   }
// };

// crearRecurso();

// const actualizarRecurso = async () => {
//   try {
//     const response = await fetch('http://localhost:8800/api/recurso/1', { // Asume que "1" es el ID del recurso a actualizar
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         nombre: 'Recurso Actualizado',
//         descripcion: 'Descripción actualizada',
//       }),
//     });
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log('Recurso actualizado:', data);
//   } catch (error) {
//     console.error('Error updating data:', error);
//   }
// };

// actualizarRecurso();

// const eliminarRecurso = async () => {
//   try {
//     const response = await fetch('http://localhost:8800/api/recurso/1', { // Asume que "1" es el ID del recurso a eliminar
//       method: 'DELETE',
//     });
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     console.log('Recurso eliminado con éxito');
//   } catch (error) {
//     console.error('Error deleting data:', error);
//   }
// };

// eliminarRecurso();
