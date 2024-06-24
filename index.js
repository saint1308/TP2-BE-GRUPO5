import express from "express";
import routes from "./Routes/Routes.js";
import dbConennection from "./dbConnection/dbConnection.js";
import morgan from "morgan";
import { DB_DIALECT, SERVER_PORT } from "./config/config.js";
import cookieParser from "cookie-parser";
import seed from "./seed/seed.js"
//el archivo .env maneja las variables de entorno (para no tenerlas a la vista en la dbConnection), debo agregarla a
//package.json en "dev" y en "start". Las variables las importo en el config.js para despues distribuirlas al resto
//console.log(process.env.DB_PORT)

const app = express();


app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cookieParser())


app.use(routes);


app.use((req,res,next)=>{
  res.status(404).send({success:false, message:"not found"})
})

await dbConennection.sync({force:true})
await seed()


app.listen(SERVER_PORT, () => {
  console.log(`Todo OK en el servidor`);
});
