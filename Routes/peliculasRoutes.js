import { Router } from "express";
import PeliculaControllers from "../Controllers/PeliculaControllers.js";

const peliculaRoutes = Router();

const peliculaController = new PeliculaControllers();

peliculaRoutes.get("/", peliculaController.getAllPeliculas);
peliculaRoutes.post("/", peliculaController.createPelicula);
peliculaRoutes.delete("/", peliculaController.deletePelicula);
peliculaRoutes.get("/me", peliculaController.me);
peliculaRoutes.get("/:titulo", peliculaController.getPeliculaByTitulo);
peliculaRoutes.put("/:id", peliculaController.updatedPelicula);



export default peliculaRoutes;
