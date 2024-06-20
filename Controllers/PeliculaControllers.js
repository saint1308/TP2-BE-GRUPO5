import dbConennection from "../dbConnection/dbConnection.js";

class PeliculaControllers {
  getAllPeliculas = async (req, res) => {
    try {
      const query = "SELECT titulo,anio,director,genero FROM peliculas";
      const data = await dbConennection.query(query);

      res
        .status(200)
        .send({ success: true, message: "Ok, PeliculaCOntrollers" });
      console.log(data);
      // console.log(data[0][0].titulo)
      // LA BASE DEVUELVE UN ARRAY, CON OTRO ARRAY QUE CONTIENE LOS OBJETOS PELICULA, E IMPRIMO "titulo"
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };
}

// getPeliculaBy = async (req, res) => {
//   try {
//     const query = "SELECT titulo,anio,director,genero FROM peliculas";
//     const data = await dbConennection.query(query);

//     res.status(200).send({ success: true, message: "Ok, PeliculaCOntrollers" });
//     console.log(data);
//     // console.log(data[0][0].titulo)
//     // LA BASE DEVUELVE UN ARRAY, CON OTRO ARRAY QUE CONTIENE LOS OBJETOS PELICULA, E IMPRIMO "titulo"
//   } catch (error) {
//     res.status(400).send({ success: false, message: error });
//   }
// };

// getAllPeliculas = async (req, res) => {
//   try {
//     const query = "SELECT titulo,anio,director,genero FROM peliculas";
//     const data = await dbConennection.query(query);

//     res.status(200).send({ success: true, message: "Ok, PeliculaCOntrollers" });
//     console.log(data);
//     // console.log(data[0][0].titulo)
//     // LA BASE DEVUELVE UN ARRAY, CON OTRO ARRAY QUE CONTIENE LOS OBJETOS PELICULA, E IMPRIMO "titulo"
//   } catch (error) {
//     res.status(400).send({ success: false, message: error });
//   }
// };

export default PeliculaControllers;
