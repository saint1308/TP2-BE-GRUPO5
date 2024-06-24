import { Pelicula } from "../Model/models.js";

const seedPeliculas = async () => {
  await Pelicula.bulkCreate([
    {
      titulo: "El Padrino",
      anio: "1972",
      director: "Francis Ford Coppola",
      genero: "Crimen, Drama",
    },
    {
      titulo: "Parásitos",
      anio: "2019",
      director: "Bong Joon-ho",
      genero: "Comedia negra, Thriller",
    },
    {
      titulo: "La La Land",
      anio: "2016",
      director: "Damien Chazelle",
      genero: "Musical, Drama, Romance",
    },
    {
      titulo: "El Origen",
      anio: "2010",
      director: "Christopher Nolan",
      genero: "Ciencia Ficción, Acción, Suspenso",
    },
    {
      titulo: "El Laberinto del Fauno",
      anio: "2006",
      director: "Guillermo del Toro",
      genero: "Fantasia, Drama, Guerra",
    },
  ]);
};

export default seedPeliculas;
