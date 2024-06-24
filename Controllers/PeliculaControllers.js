import { Pelicula } from "../Model/models.js";
import { generateToken, validateToken } from "../utils/tokens.js";

class PeliculaControllers {
  createPelicula = async (req, res) => {
    try {
      const { titulo, anio, director, genero } = req.body;

      const pelicula = await Pelicula.findOne({ where: { titulo } });
      if (pelicula) throw new Error("Esa pelicula ya existe");

      const data = await Pelicula.create({ titulo, anio, director, genero });

      res
        .status(200)
        .send({ success: true, message: "Ok, PeliculaCOntrollers" });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllPeliculas = async (req, res) => {
    try {
      const data = await Pelicula.findAll({
        attributes: ["id", "titulo", "director"],
      });

      res
        .status(200)
        .send({ success: true, message: "Ok, PeliculaCOntrollers" });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  getPeliculaByTitulo = async (req, res) => {
    try {
      const { titulo } = req.params;
      const data = await Pelicula.findOne({
        where: {
          titulo,
        },
        attributes: ["id", "titulo", "director"],
      });

      res.status(200).send({ success: true, message: "Pelicula por titulo" });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  updatedPelicula = async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, anio, director, genero } = req.body;

      const data = await Pelicula.update(
        { titulo, anio, director, genero },
        { where: { id } }
      );

      res.status(200).send({ success: true, message: "Update de Pelicula" });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  deletePelicula = async (req, res) => {
    try {
      const { titulo } = req.body;

      const data = await Pelicula.findOne({ where: { titulo } });

      if (!data) throw new Error("No existe la pelicula");

      const payload = {
        id: data.id,
        titulo: data.titulo,
      };

      const token = generateToken(payload);
      console.log("Tu token es" + token);

      res.cookie("token", token);

      const pelicula = await Pelicula.destroy({ where: { titulo } });
      console.log(pelicula);

      res
        .status(200)
        .send({ success: true, message: "Pelicula eliminada con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  me = async (req, res) => {
    try {
      const { token } = req.cookies;
      const validate = validateToken(token);
      console.log(validate);
      res.status(200).send({ success: true, message: validate.payload });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default PeliculaControllers;
