USE `videoclub`;

DROP TABLE IF EXISTS `peliculas`;
CREATE TABLE `peliculas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text,
  `genero` varchar(100) DEFAULT NULL,
  `año` int DEFAULT NULL,
  `imagen_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `peliculas` (`id`, `titulo`, `descripcion`, `genero`, `año`, `imagen_url`) VALUES
(1,	'Ficción Espacial',	'Una odisea en el espacio que desafía la imaginación.',	'Ciencia Ficción',	2021,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(2,	'Aventuras en la Selva',	'Un grupo de amigos descubre secretos ocultos en la selva.',	'Aventura',	2020,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(3,	'El Misterio del Faro',	'Un faro abandonado guarda el secreto de una desaparición.',	'Misterio',	2019,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(4,	'Amor Sin Tiempo',	'Una historia de amor que trasciende diferentes épocas.',	'Romance',	2021,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(5,	'Carrera Cósmica',	'Pilotos compiten en la carrera más peligrosa del universo.',	'Ciencia Ficción',	2022,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(6,	'El Último Duelo',	'Dos guerreros enfrentan su destino en un duelo final.',	'Acción',	2021,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(7,	'Secretos del Pasado',	'Una mujer descubre secretos familiares que cambian su vida.',	'Drama',	2018,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(8,	'La Isla Perdida',	'Exploradores buscan una isla misteriosa con tesoros antiguos.',	'Aventura',	2020,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(9,	'El Código Enigma',	'Un genio descifra códigos secretos que pueden cambiar la guerra.',	'Historia',	2017,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(10,	'Viaje al Centro de la Mente',	'Una expedición a los recovecos más profundos de la mente humana.',	'Ciencia Ficción',	2022,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(11,	'Guardianes del Tiempo',	'Un grupo de viajeros intenta corregir líneas de tiempo rotas.',	'Aventura',	2023,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(12,	'Sombras en la Noche',	'Un detective persigue a un asesino en las sombras de la ciudad.',	'Suspense',	2019,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(13,	'El Despertar de los Dragones',	'Dragones antiguos despiertan y el mundo debe prepararse.',	'Fantasía',	2021,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(14,	'Robots Rebeldes',	'La inteligencia artificial supera a sus creadores.',	'Ciencia Ficción',	2022,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(15,	'El Hechicero del Norte',	'Un joven mago descubre sus verdaderos poderes.',	'Fantasía',	2018,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(16,	'Océanos de Fuego',	'Piratas luchan por un tesoro legendario en mares peligrosos.',	'Aventura',	2020,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(17,	'El Laberinto Oscuro',	'Un grupo de héroes intenta escapar de un laberinto mortal.',	'Fantasía',	2019,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(18,	'Estrellas Fugaces',	'Una historia de amor entre dos almas en el espacio.',	'Romance, Ciencia Ficción',	2021,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(19,	'La Rebelión de los Simios',	'Simios inteligentes luchan por su libertad y derechos.',	'Acción',	2023,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(20,	'El Último Samurai',	'Un samurai protege su pueblo de invasores.',	'Acción, Historia',	2018,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(21,	'Cazadores de Sombras',	'Cazadores luchan contra criaturas sobrenaturales que amenazan el mundo.',	'Fantasía',	2022,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(22,	'El Fantasma de la Ópera',	'Un fantasma atormenta la ópera de París en busca de amor.',	'Drama, Musical',	2020,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(23,	'La Era de Hielo',	'Animales prehistóricos emprenden una divertida aventura para sobrevivir.',	'Animación',	2019,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(24,	'Invasión Zombie',	'Sobrevivientes luchan contra una plaga de zombies.',	'Terror',	2021,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(25,	'El Gran Escape',	'Prisioneros de guerra planean un audaz escape.',	'Historia, Drama',	2017,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(26,	'Mundos Paralelos',	'Científicos descubren cómo viajar entre mundos paralelos.',	'Ciencia Ficción',	2022,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(27,	'La Torre Oscura',	'Un pistolero busca una torre mística que es la clave para salvar su mundo.',	'Fantasía',	2023,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(28,	'El Tesoro del Amazonas',	'Aventureros buscan un tesoro oculto en la selva amazónica.',	'Aventura',	2018,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(29,	'La Batalla de los Dioses',	'Dioses de diferentes mitologías luchan entre sí.',	'Fantasía',	2021,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg'),
(30,	'Viajeros del Tiempo',	'Viajeros usan una máquina del tiempo para cambiar la historia.',	'Ciencia Ficción',	2020,	'https://www.lahiguera.net/cinemania/pelicula/7135/el_corredor_del_laberinto_las_pruebas-cartel-6192.jpg');

-- 2024-02-26 17:13:29
