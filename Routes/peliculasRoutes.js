import { Router } from "express";
import PeliculaControllers from "../Controllers/PeliculaControllers.js";

const peliculaRoutes = Router();

const peliculaController = new PeliculaControllers();

peliculaRoutes.get("/", peliculaController.getAllPeliculas);
peliculaRoutes.post("/:titulo", peliculaController.getPeliculaByTitulo);
peliculaRoutes.put("/:titulo", peliculaController.updatedPelicula);
peliculaRoutes.delete("/:titulo", peliculaController.deletePelicula);



export default peliculaRoutes;
