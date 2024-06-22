import { Router } from "express";
import PeliculaControllers from "../Controllers/PeliculaControllers.js";

const peliculaRoutes = Router();

const peliculaController = new PeliculaControllers();

peliculaRoutes.post("/", peliculaController.createPelicula);
peliculaRoutes.get("/", peliculaController.getAllPeliculas);
peliculaRoutes.get("/:titulo", peliculaController.getPeliculaByTitulo);
peliculaRoutes.put("/:id", peliculaController.updatedPelicula);
peliculaRoutes.delete("/:titulo", peliculaController.deletePelicula);



export default peliculaRoutes;
