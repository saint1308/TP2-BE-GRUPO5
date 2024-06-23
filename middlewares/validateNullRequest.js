//ejemplo que hago para guardar cosas en la memoria con tokens.js

/*const payload ={
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

//tengo que acceder al token se ejecuta con un get, me sirve para chequear por ej si estoy logueado para hacer x accion, persiste datos cuando refrescas la pagina
/*me= async(req,res)=>{
    try {
      //el req devuelve el token (entre otras cosas)
      //console.log(req.cookies.token)
      const {token}= req.cookies
      //agarro el token y lo descifro con el validateToken
      const validate = validateToken(token)
      console.log(validate)
      res.status(200).send({ success: true, message: validate.payload });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
  
    }
  }
*/
