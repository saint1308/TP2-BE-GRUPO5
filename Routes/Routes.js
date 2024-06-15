import { Router } from "express";
import PeliculasController from "../Controllers/PeliculasController";

const routes = Router();

const palabrasController = new PeliculasController();

routes.post("/", palabrasController.createPalabra);
routes.get("/", palabrasController.getPalabras);
routes.delete("/:palabra", palabrasController.deletePalabra);
routes.get("/:cantidad", palabrasController.getCatidadPalabras);

export default routes;
