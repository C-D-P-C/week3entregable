const {
  getAll,
  create,
  getOne,
  remove,
  update,
  setGenresToMovies,
  setActorsToMovies,
  setDirectors,
} = require("../controllers/movie.controllers");
const express = require("express");

const routerMovie = express.Router();

// Ruta para obtener todas las películas y crear una nueva película
routerMovie
  .route("/")
  .get(getAll) // Obtener todas las películas
  .post(create); // Crear una nueva película

// Ruta para establecer géneros para una película específica
routerMovie.route("/:id/genres").post(setGenresToMovies); // Establecer géneros para una película

// Ruta para establecer actores para una película específica
routerMovie.route("/:id/actors").post(setActorsToMovies); // Establecer actores para una película

// Ruta para establecer directores para una película específica
routerMovie.route("/:id/directors").post(setDirectors); // Establecer directores para una película

// Ruta para obtener una película por su ID, eliminar y actualizar una película
routerMovie
  .route("/:id")
  .get(getOne) // Obtener una película por su ID
  .delete(remove) // Eliminar una película
  .put(update); // Actualizar una película

module.exports = routerMovie;
