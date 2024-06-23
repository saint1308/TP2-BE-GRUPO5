import {Sucursal, Pelicula, PeliculaSucursal} from "../Model/models.js";
import { generateToken, validateToken } from "../utils/tokens.js";

class SucursalControllers {


  addPeliculaToSucursal = async(req,res) =>{
    try{
    const {nombre} =req.params //nombre de la sucursal (que viene por parametro)
    const {titulo} = req.body // nombre de la pelicula que quiero agregar (que viene por un formulario)
    
    //busco en la tabla si existe una sucursal con ese nombre
    const sucursal =await Sucursal.findOne({where:{nombre}})
    if (!sucursal) throw new Error("Sucursal no encontrada");
    //busco en la tabla pelicula una pelicula con ese nombre
    const pelicula = await Pelicula.findOne({ where: { titulo: titulo } });
    if (!pelicula) throw new Error("Película no encontrada");

    //voy a crear la relacion en la tabla intermedia peliculasucursal (le voy a mandar ambos id)
    const relacion = await PeliculaSucursal.create({ peliculaId: pelicula.id, sucursalId: sucursal.id });
    

    res.status(201).send({ success: true, data: relacion });
    }catch(error){
      res.status(400).send({ success: false, message: error.message });
    }

  }





  createSucursal= async (req, res) => {
    try {
      //desestructuramos el request con lo que necesitamos para crear el objeto

      const {nombre,calle,altura,localidad} = req.body;

      const sucursal = await Sucursal.findOne({where:{nombre}})
      if(sucursal) throw new Error("Esa sucursal ya existe")

      const data = await Sucursal.create({nombre,calle,altura,localidad});

      res.status(200).send({ success: true, message: "Ok, desde Crear Sucursal" });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllSucursales = async (req, res) => {
    try {
      
      const data = await Sucursal.findAll({
        //si no le pongo esto me trae todos los campos, esto es como un filtro
        attributes:["id","nombre","localidad"]
      })

      

      res.status(200).send({success: true, message: "Ok, Get All Sucursales" });
      console.log(data);
      // console.log(data[0][0].titulo)
      // LA BASE DEVUELVE UN ARRAY, CON OTRO ARRAY QUE CONTIENE LOS OBJETOS PELICULA, E IMPRIMO "titulo"
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  getSucursalByNombre = async (req, res) => {
    try {
      const {nombre} = req.params
      const data = await Sucursal.findOne({
        where:{
          //es lo mismo que poner title:title , quiero que el title que busco sea igual al que tengo en la tabla y 
          //me lo devuelva
          nombre
        },
        //si no le pongo esto me trae todos los campos, esto es como un filtro
        attributes:["id","nombre","localidad"]
      })

      if(data === null) throw new Error("No existe esa Sucursal")

      res.status(200).send({ success: true, message: "Sucursal por nombre" });
      console.log(data)
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updatedSucursal = async (req, res) => {
    try {
      const {id} = req.params
      const {nombre,calle,altura,localidad} = req.body
      //const { anio, director,genero} = req.body
  
       const data = await Sucursal.update(
        {nombre,calle,altura,localidad},
        {where:{id}}
      )

      res.status(200).send({ success: true, message: " OK Update de Sucursal " });
      console.log(data)
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
} 


deleteSucursal = async (req, res) => {
  try {

    //const {id} = req.params
    const {nombre} = req.body

     const data = await Sucursal.findOne({where:{nombre}})

     if(!data) throw new Error("No existe la Sucursal")

     const sucursal = await Sucursal.destroy({where:{nombre}}) 
    console.log(sucursal)
      
    res.status(200).send({ success: true, message: "Sucursal eliminada con exito" });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};



}
export default SucursalControllers;
