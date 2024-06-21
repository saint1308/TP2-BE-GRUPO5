import express from "express";
import routes from "./Routes/Routes.js";

const app = express();
const PORT = 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
