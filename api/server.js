import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "videoclub",
});

app.get("/", (req, res) => {
  res.json("hello");
});

// Ruta GET para obtener todas las películas
app.get("/peliculas", (req, res) => {
  const q = "SELECT * FROM peliculas"; // Consulta SQL para seleccionar todas las películas
  db.query(q, (err, data) => { // Ejecuta la consulta en la base de datos
    if (err) {
      console.log(err); 
      return res.json(err); // Envía el error como respuesta JSON
    }
    return res.json(data); // Envía los datos obtenidos como respuesta JSON
  });
});

// Ruta GET para obtener una película por su ID
app.get("/peliculas/:id", (req, res) => {
  const { id } = req.params; // Extrae el ID de la película de los parámetros de la ruta
  const q = "SELECT * FROM peliculas WHERE id = ?"; // Consulta SQL para seleccionar la película por ID
  db.query(q, [id], (err, data) => { // Ejecuta la consulta con el ID como parámetro
    if (err) {
      console.log(err); 
      return res.status(500).json(err); // Envía el error como respuesta JSON con estado 500
    }
    if (data.length > 0) {
      return res.json(data[0]); // Envía la película encontrada como respuesta JSON
    } else {
      return res.status(404).json({ message: 'Película no encontrada' }); // Envía un mensaje de error 404 si no se encuentra la película
    }
  });
});

// Ruta POST para añadir una nueva película
app.post("/peliculas", (req, res) => {
  const q = "INSERT INTO peliculas(`titulo`, `descripcion`, `genero`, `año`, `imagen_url`) VALUES (?)";
  const values = [
    req.body.titulo,
    req.body.descripcion,
    req.body.genero,
    req.body.año,
    req.body.imagen_url,
  ]; 

  db.query(q, [values], (err, data) => { // Ejecuta la consulta de inserción
    if (err) return res.send(err); // Si hay un error, lo envía como respuesta
    return res.json(data); 
  });
});

// Ruta DELETE para eliminar una película por su ID
app.delete("/peliculas/:id", (req, res) => {
  const bookId = req.params.id; // Extrae el ID de la película de los parámetros de la ruta
  const q = " DELETE FROM peliculas WHERE id = ? "; // Consulta SQL para eliminar la película por ID

  db.query(q, [bookId], (err, data) => { // Ejecuta la consulta de eliminación
    if (err) return res.send(err); // Si hay un error, lo envía como respuesta
    return res.json(data); 
  });
});

// Ruta PUT para actualizar una película por su ID
app.put("/peliculas/:id", (req, res) => {
  const bookId = req.params.id; // Extrae el ID de la película de los parámetros de la ruta
  const q = "UPDATE peliculas SET `titulo`= ?, `descripcion`= ?, `genero`= ?, `año`= ?, `imagen_url`= ? WHERE id = ?";
  const values = [
    req.body.titulo,
    req.body.descripcion,
    req.body.genero,
    req.body.año,
    req.body.imagen_url,
  ];

  db.query(q, [...values, bookId], (err, data) => { // Ejecuta la consulta de actualización
    if (err) return res.send(err); // Si hay un error, lo envía como respuesta
    return res.json(data); // Envía los datos de la actualización como respuesta JSON
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
