import { DataTypes, Model } from 'sequelize';
import dbConnection from '../dbConnection/dbConnection.js';

class PeliculaSucursal extends Model {}

PeliculaSucursal.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  peliculaId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Peliculas', 
      key: 'id',
    },
  },
  sucursalId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Sucursales', 
      key: 'id',
    },
  },
}, {
  sequelize: dbConnection,
  modelName: 'PeliculaSucursal',
  tableName: 'PeliculaSucursal',
  timestamps: false,
});

export default PeliculaSucursal;
