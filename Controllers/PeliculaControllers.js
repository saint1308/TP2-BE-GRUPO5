import {Pelicula, Sucursal} from "../Model/models.js";
import { generateToken } from "../utils/tokens.js";

class PeliculaControllers {

  //usamos los metodos de sequalize para evitar tener que pasar las query por escrito y se vuelva tedioso
  createPelicula= async (req, res) => {
    try {
      //desestructuramos el request con lo que necesitamos para crear el objeto

      const {titulo,anio,director,genero} = req.body;

      const pelicula = await Pelicula.findOne({where:{titulo}})
      if(pelicula) throw new Error("Esa pelicula ya existe")

      const data = await Pelicula.create({titulo,anio,director,genero});

      res.status(200).send({ success: true, message: "Ok, PeliculaCOntrollers" });
      console.log(data);
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


  getAllPeliculas = async (req, res) => {
    try {
      
      const data = await Pelicula.findAll({
        //si no le pongo esto me trae todos los campos, esto es como un filtro
        attributes:["id","titulo","director"]
      })

      

      res.status(200).send({success: true, message: "Ok, PeliculaCOntrollers" });
      console.log(data);
      // console.log(data[0][0].titulo)
      // LA BASE DEVUELVE UN ARRAY, CON OTRO ARRAY QUE CONTIENE LOS OBJETOS PELICULA, E IMPRIMO "titulo"
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  getPeliculaByTitulo = async (req, res) => {
    
    try {
      const {titulo} = req.params
      const data = await Pelicula.findOne({
        where:{
          //es lo mismo que poner title:title , quiero que el title que busco sea igual al que tengo en la tabla y 
          //me lo devuelva
          titulo
        },
        //si no le pongo esto me trae todos los campos, esto es como un filtro
        attributes:["id","titulo","director"]
      })

      res.status(200).send({ success: true, message: "Pelicula por titulo" });
      console.log(data)
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  updatedPelicula = async (req, res) => {
    try {
      const {id} = req.params
      const {titulo,anio,director,genero} = req.body
      //const { anio, director,genero} = req.body
  
       const data = await Pelicula.update(
        {titulo,anio,director,genero},
        {where:{id}}
      )

     

      res.status(200).send({ success: true, message: "Update de Pelicula" });
      console.log(data)
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  deletePelicula = async (req, res) => {
    try {

      //const {id} = req.params
      const {titulo} = req.body
  
       const data = await Pelicula.findOne({where:{titulo}})

       if(!data) throw new Error("No existe la pelicula")

      //ejemplo que hago para guardar cosas en la memoria con tokens.js

      const payload ={
          id:data.id,
          titulo:data.titulo
      }
      
      //genero el token

      const token = generateToken(payload)
      console.log("Tu token es" + token)

      //voy a guardar el token en una cookie
      //como primer parametro le paso el nombre que le voy a poner a la cookie y liego el token

      res.cookie("token",token)
      //sigue desde 2:22:00 de la clase 10

       const pelicula = await Pelicula.destroy({where:{titulo}}) 
        console.log(pelicula)
        
      res.status(200).send({ success: true, message: "Pelicula eliminada con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  //tengo que acceder al token se ejecuta con un get
  me= async(req,res)=>{
    try {
      //el req devuelve el token (entre otras cosas)
      console.log(req)
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
  
    }
  }

}






export default PeliculaControllers;
