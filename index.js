import express from "express";
import routes from "./Routes/Routes.js";
import dbConennection from "./dbConnection/dbConnection.js";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use(routes);




app.use((req,res,next)=>{
  res.status(404).send({success:false, message:"not found"})
})

await dbConennection.sync()

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
