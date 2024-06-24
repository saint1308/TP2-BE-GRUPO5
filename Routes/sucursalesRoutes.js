import { Router } from "express";
import sucursalControllers from "../Controllers/SucursalControllers.js";
import PeliculaSucursalController from "../Controllers/PeliculaSucursalController.js";

const sucursalesRoutes = Router();

const sucursalController = new sucursalControllers();
const peliculasSucursalesController = new PeliculaSucursalController();

sucursalesRoutes.post("/", sucursalController.createSucursal);
sucursalesRoutes.get("/", sucursalController.getAllSucursales);
sucursalesRoutes.get("/:nombre", sucursalController.getSucursalByNombre);
sucursalesRoutes.put("/:id", sucursalController.updatedSucursal);
sucursalesRoutes.delete("/:nombre", sucursalController.deleteSucursal);

//PELICULAS SUCURSALES
sucursalesRoutes.post("/agregarPelicula",peliculasSucursalesController.addPeliculaToSucursal)
sucursalesRoutes.get("/listarPeliculas/:id",peliculasSucursalesController.getPeliculasFromSucursal)
sucursalesRoutes.delete("/eliminarPelicula/:id",peliculasSucursalesController.deletePeliculasFromSucursal)



export default sucursalesRoutes;
