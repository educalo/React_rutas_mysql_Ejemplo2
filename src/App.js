import './App.css';
import AppRoutes from '../src/routes/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
    <div className="App">
    <AppRoutes />

    </div>    
    </Router>

  );
}

export default App;



// INSERT INTO peliculas (titulo, descripcion, genero, año, imagen_url) VALUES
// ('Ficción Espacial', 'Una odisea en el espacio que desafía la imaginación.', 'Ciencia Ficción', 2021, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Aventuras en la Selva', 'Un grupo de amigos descubre secretos ocultos en la selva.', 'Aventura', 2020, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('El Misterio del Faro', 'Un faro abandonado guarda el secreto de una desaparición.', 'Misterio', 2019, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Amor Sin Tiempo', 'Una historia de amor que trasciende diferentes épocas.', 'Romance', 2021, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Carrera Cósmica', 'Pilotos compiten en la carrera más peligrosa del universo.', 'Ciencia Ficción', 2022, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('El Último Duelo', 'Dos guerreros enfrentan su destino en un duelo final.', 'Acción', 2021, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Secretos del Pasado', 'Una mujer descubre secretos familiares que cambian su vida.', 'Drama', 2018, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('La Isla Perdida', 'Exploradores buscan una isla misteriosa con tesoros antiguos.', 'Aventura', 2020, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('El Código Enigma', 'Un genio descifra códigos secretos que pueden cambiar la guerra.', 'Historia', 2017, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Viaje al Centro de la Mente', 'Una expedición a los recovecos más profundos de la mente humana.', 'Ciencia Ficción', 2022, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Guardianes del Tiempo', 'Un grupo de viajeros intenta corregir líneas de tiempo rotas.', 'Aventura', 2023, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Sombras en la Noche', 'Un detective persigue a un asesino en las sombras de la ciudad.', 'Suspense', 2019, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('El Despertar de los Dragones', 'Dragones antiguos despiertan y el mundo debe prepararse.', 'Fantasía', 2021, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Robots Rebeldes', 'La inteligencia artificial supera a sus creadores.', 'Ciencia Ficción', 2022, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('El Hechicero del Norte', 'Un joven mago descubre sus verdaderos poderes.', 'Fantasía', 2018, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Océanos de Fuego', 'Piratas luchan por un tesoro legendario en mares peligrosos.', 'Aventura', 2020, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('El Laberinto Oscuro', 'Un grupo de héroes intenta escapar de un laberinto mortal.', 'Fantasía', 2019, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Estrellas Fugaces', 'Una historia de amor entre dos almas en el espacio.', 'Romance, Ciencia Ficción', 2021, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('La Rebelión de los Simios', 'Simios inteligentes luchan por su libertad y derechos.', 'Acción', 2023, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('El Último Samurai', 'Un samurai protege su pueblo de invasores.', 'Acción, Historia', 2018, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Cazadores de Sombras', 'Cazadores luchan contra criaturas sobrenaturales que amenazan el mundo.', 'Fantasía', 2022, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('El Fantasma de la Ópera', 'Un fantasma atormenta la ópera de París en busca de amor.', 'Drama, Musical', 2020, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('La Era de Hielo', 'Animales prehistóricos emprenden una divertida aventura para sobrevivir.', 'Animación', 2019, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Invasión Zombie', 'Sobrevivientes luchan contra una plaga de zombies.', 'Terror', 2021, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('El Gran Escape', 'Prisioneros de guerra planean un audaz escape.', 'Historia, Drama', 2017, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Mundos Paralelos', 'Científicos descubren cómo viajar entre mundos paralelos.', 'Ciencia Ficción', 2022, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('La Torre Oscura', 'Un pistolero busca una torre mística que es la clave para salvar su mundo.', 'Fantasía', 2023, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('El Tesoro del Amazonas', 'Aventureros buscan un tesoro oculto en la selva amazónica.', 'Aventura', 2018, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('La Batalla de los Dioses', 'Dioses de diferentes mitologías luchan entre sí.', 'Fantasía', 2021, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
// ('Viajeros del Tiempo', 'Viajeros usan una máquina del tiempo para cambiar la historia.', 'Ciencia Ficción', 2020, 'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg');
