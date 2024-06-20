import { Router } from "express";
import PeliculaControllers from "../Controllers/PeliculaControllers.js";

const peliculaRoutes = Router();

const peliculaController = new PeliculaControllers

peliculaRoutes.get("/", peliculaController.getAllPeliculas);
// peliculaRoutes.post("/", peliculaController.createPalabra);
// peliculaRoutes.delete("/:titulo", peliculaController.deletePalabra);

export default peliculaRoutes;
