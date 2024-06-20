import { Router } from "express";
import sucursalControllers from "../Controllers/SucursalControllers.js";

const sucursalesRoutes = Router();

const sucursalController = new sucursalControllers();

sucursalesRoutes.get("/", sucursalController.getAllSucursales);
sucursalesRoutes.post("/:titulo", sucursalController.getSucursalByNombre);
sucursalesRoutes.put("/:titulo", sucursalController.updatedSucursal);
sucursalesRoutes.delete("/:titulo", sucursalController.deleteSucursal);



export default sucursalesRoutes;
