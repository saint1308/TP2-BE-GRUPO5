import { PeliculaSucursal, Pelicula, Sucursal } from "../Model/models.js";

class PeliculaSucursalController {
  addPeliculaToSucursal = async (req, res) => {
    try {
      const { nombre, titulo } = req.body;

      const sucursal = await Sucursal.findOne({ where: { nombre } });
      if (!sucursal) throw new Error("Sucursal no encontrada");
      const pelicula = await Pelicula.findOne({ where: { titulo } });
      if (!pelicula) throw new Error("Película no encontrada");

      const result = await PeliculaSucursal.findOne({
        where: {
          peliculaId: sucursal.id,
          sucursalId: pelicula.id,
        },
      });
      if (result) throw new Error("La sucursal ya posee esta pelicula");

      const relacion = await PeliculaSucursal.create({
        peliculaId: pelicula.id,
        sucursalId: sucursal.id,
      });

      res.status(201).send({ success: true, data: relacion });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getPeliculasFromSucursal = async (req, res) => {
    const { id } = req.params;
    try {
      const sucursal = await Sucursal.findByPk(id, {
        include: {
          model: Pelicula,
          through: {
            attributes: [],
          },
        },
      });

      if (!sucursal) {
        throw new Error("No se encontro la sucursal");
      }

      const peliculas = sucursal.Peliculas;
      res.json(peliculas);
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deletePeliculasFromSucursal = async (req, res) => {
    const { id } = req.params;
    const { titulo } = req.body;

    try {
      const sucursal = await Sucursal.findByPk(id);
      if (!sucursal) {
        return res
          .status(404)
          .json({ success: false, message: "Sucursal no encontrada" });
      }

      const pelicula = await Pelicula.findOne({ where: { titulo } });
      if (!pelicula) {
        return res
          .status(404)
          .json({ success: false, message: "Pelicula no encontrada" });
      }

      await PeliculaSucursal.destroy({
        where: { sucursalId: id, peliculaId: pelicula.id },
      });

      res.status(200).json({ success: true, message: "Relación eliminada" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
}

export default PeliculaSucursalController;
