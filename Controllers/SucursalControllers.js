import {Sucursal, Pelicula} from "../Model/models.js";
import { generateToken, validateToken } from "../utils/tokens.js";

class SucursalControllers {

  createSucursal= async (req, res) => {
    try {
      //desestructuramos el request con lo que necesitamos para crear el objeto

      const {nombre,calle,altura,localidad} = req.body;

      const sucursal = await Sucursal.findOne({where:{nombre}})
      if(sucursal) throw new Error("Esa sucursal ya existe")

      const data = await Sucursal.create({nombre,calle,altura,localidad});

      res.status(200).send({ success: true, message: "Ok, desde Crear Sucursal" });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllSucursales = async (req, res) => {
    try {
    //   const query = "SELECT titulo,anio,director,genero FROM peliculas";
    //   const data = await dbConennection.query(query);

      res
        .status(200)
        .send({ success: true, message: "TODAS LAS SUCURSALES" });
    //   console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  getSucursalByNombre = async (req, res) => {
    try {
      res.status(200).send({ success: true, message: "Sucursal por nombre" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  updatedSucursal = async (req, res) => {
    try {
      res.status(200).send({ success: true, message: "Update de Sucursal" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  deleteSucursal = async (req, res) => {
    try {
      res.status(200).send({ success: true, message: "Delete de Sucursal" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };
}
export default SucursalControllers;
