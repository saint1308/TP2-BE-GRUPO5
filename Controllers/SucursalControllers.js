import Sucursal from "../Model/Sucursal.js";
import dbConennection from "../dbConnection/dbConnection.js";


class SucursalControllers {
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
