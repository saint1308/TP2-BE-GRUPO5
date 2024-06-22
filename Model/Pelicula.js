import { DataTypes, Model } from "sequelize";
import dbConennection from "../dbConnection/dbConnection.js";

class Pelicula extends Model {}

Pelicula.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {sequelize:dbConennection,
    modelName:"Pelicula"
  }
);





export default Pelicula;
