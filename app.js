// Importar el módulo de películas
const peliculas = require('./peliculas.js');

// Mostrar el listado de películas
peliculas.forEach(pelicula => {
  console.log('ID:', pelicula.id);
  console.log('Título:', pelicula.title);
  console.log('Calificación:', pelicula.rating);
  console.log('Premios:', pelicula.awards);
  console.log('Duración:', pelicula.length, 'minutos');
  console.log('Precio:', pelicula.price);
  console.log('Género:', pelicula.genre);
  console.log('--------------------------');
});

// Importar el módulo 'fs' (sistema de archivos) nativo de Node.js
const fs = require('fs');

// Asignar la ruta del archivo 'mensaje.txt' a una variable
const rutaArchivo = './mensaje.txt';

// Leer el contenido del archivo
fs.readFile(rutaArchivo, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  // Mostrar el contenido del archivo en la consola
  console.log('Contenido del archivo:');
  console.log(data);
});

