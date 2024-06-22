import jwt from "jsonwebtoken"
import { SECRET } from "../config/config.js"

//quiero pasarle la data que quiero hashear, la palabra secreta y el tiempo de expiracion

export const generateToken=(payload)=>{

    //genero el token, le paso el objeto,la palabra secreta que esta en .env, y el tiempo de expiracion
    const token= jwt.sign({payload}, SECRET,{expiresIn:"1d"})
    return token
}

export const validateToken=(token)=>{
    const verifytoken= jwt.verify(token, SECRET)
    return verifytoken
}