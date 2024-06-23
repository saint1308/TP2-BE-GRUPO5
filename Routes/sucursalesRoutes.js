import { Router } from "express";
import sucursalControllers from "../Controllers/SucursalControllers.js";

const sucursalesRoutes = Router();

const sucursalController = new sucursalControllers();

sucursalesRoutes.post("/", sucursalController.createSucursal);
sucursalesRoutes.get("/", sucursalController.getAllSucursales);
sucursalesRoutes.get("/:nombre", sucursalController.getSucursalByNombre);
sucursalesRoutes.put("/:id", sucursalController.updatedSucursal);
sucursalesRoutes.delete("/:nombre", sucursalController.deleteSucursal);
sucursalesRoutes.post("/:nombre",sucursalController.addPeliculaToSucursal)


export default sucursalesRoutes;
