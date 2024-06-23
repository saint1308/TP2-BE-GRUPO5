import express from "express";
import routes from "./Routes/Routes.js";
import dbConennection from "./dbConnection/dbConnection.js";

const app = express();
const PORT = 3000;

app.use(routes);

await dbConennection.sync()

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
