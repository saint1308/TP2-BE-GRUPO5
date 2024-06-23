import { Router } from "express";
import sucursalControllers from "../Controllers/SucursalControllers.js";

const sucursalesRoutes = Router();

const sucursalController = new sucursalControllers();

sucursalesRoutes.post("/", sucursalController.createSucursal);
sucursalesRoutes.get("/", sucursalController.getAllSucursales);
sucursalesRoutes.get("/:titulo", sucursalController.getSucursalByNombre);
//sucursalesRoutes.post("/:titulo", sucursalController.getSucursalByNombre);
sucursalesRoutes.put("/:titulo", sucursalController.updatedSucursal);
sucursalesRoutes.delete("/:titulo", sucursalController.deleteSucursal);



export default sucursalesRoutes;
