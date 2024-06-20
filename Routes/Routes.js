import { Router } from "express";
import peliculasRoutes from "./peliculasRoutes.js"
import sucursalesRoutes from "./sucursalesRoutes.js"

const routes = Router();

routes.use("/peliculas",peliculasRoutes)
// routes.use("/sucursales",sucursalesRoutes)


routes.get("/", (req,res) => {

    res.send("GET GENERICO DEL LOCALHOST")
});

export default routes;
