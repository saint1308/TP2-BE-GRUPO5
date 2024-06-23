import { DataTypes, Model } from "sequelize";
import dbConennection from "../dbConnection/dbConnection.js";

class Sucursal extends Model {}

Sucursal.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    localidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {sequelize:dbConennection,
    modelName:"Sucursal",
    tableName: 'Sucursales'
  }
);

export default Sucursal;
