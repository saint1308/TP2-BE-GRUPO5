import Pelicula from "./Pelicula.js";
import Sucursal from "./Sucursal.js";



//const PeliculaSucursal = dbConnection.define('PeliculaSucursal', {}, { timestamps: false });

Pelicula.belongsToMany(Sucursal, { through: 'PeliculaSucursal' });
Sucursal.belongsToMany(Pelicula, { through: 'PeliculaSucursal' });






export {Pelicula, Sucursal}