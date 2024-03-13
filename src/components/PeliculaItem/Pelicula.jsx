import React from 'react';
import './Pelicula.css';
import { Link } from 'react-router-dom';

const Pelicula = ({ pelicula }) => {
  return (
    <Link to={`/detalle/${pelicula.id}`}>
    <div className="pelicula">
      <img src={pelicula.imagen_url} alt={pelicula.titulo} className="pelicula-imagen" />
      <div className="pelicula-info">
        <h3 class="texto">{pelicula.titulo}</h3>
        <p>{pelicula.genero}, {pelicula.año}</p>
      </div>
    </div>
    </Link>

  );
};

export default Pelicula;
