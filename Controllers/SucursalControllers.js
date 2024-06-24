import { Sucursal, Pelicula, PeliculaSucursal } from "../Model/models.js";
import { generateToken, validateToken } from "../utils/tokens.js";

class SucursalControllers {
  createSucursal = async (req, res) => {
    try {
      const { nombre, calle, altura, localidad } = req.body;

      const sucursal = await Sucursal.findOne({ where: { nombre } });
      if (sucursal) throw new Error("Esa sucursal ya existe");

      const data = await Sucursal.create({ nombre, calle, altura, localidad });

      res
        .status(200)
        .send({ success: true, message: "Ok, desde Crear Sucursal" });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllSucursales = async (req, res) => {
    try {
      const data = await Sucursal.findAll({
        attributes: ["id", "nombre", "localidad"],
      });

      res
        .status(200)
        .send({ success: true, message: "Ok, Get All Sucursales" });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  getSucursalByNombre = async (req, res) => {
    try {
      const { nombre } = req.params;
      const data = await Sucursal.findOne({
        where: {
          nombre,
        },
        attributes: ["id", "nombre", "localidad"],
      });

      if (data === null) throw new Error("No existe esa Sucursal");

      res.status(200).send({ success: true, message: "Sucursal por nombre" });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updatedSucursal = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, calle, altura, localidad } = req.body;

      const data = await Sucursal.update(
        { nombre, calle, altura, localidad },
        { where: { id } }
      );

      res
        .status(200)
        .send({ success: true, message: " OK Update de Sucursal " });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  deleteSucursal = async (req, res) => {
    try {
      const { nombre } = req.params;

      const data = await Sucursal.findOne({ where: { nombre } });

      if (!data) throw new Error("No existe la Sucursal");

      const sucursal = await Sucursal.destroy({ where: { nombre } });
      console.log(sucursal);

      res
        .status(200)
        .send({ success: true, message: "Sucursal eliminada con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}
export default SucursalControllers;
