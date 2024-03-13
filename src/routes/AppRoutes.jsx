import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PeliculasScreen from '../screens/peliculasScreen/PeliculasScreen';
import PeliculaDetalles from '../screens/detailPelicula/PeliculaDetalles';
import AddPelicula from '../screens/AddPelicula/AddPelicula';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PeliculasScreen />} />
      <Route path="/detalle/:id" element={<PeliculaDetalles />} />
      <Route path="/add" element={<AddPelicula/>} />
    </Routes>
  );
};

export default AppRoutes;
