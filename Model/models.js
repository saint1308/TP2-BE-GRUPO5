import Pelicula from "./Pelicula.js";
import Sucursal from "./Sucursal.js";
import PeliculaSucursal from "./PeliculaSucursal.js";

Pelicula.belongsToMany(Sucursal, {
  through: PeliculaSucursal,
  foreignKey: "peliculaId",
});
Sucursal.belongsToMany(Pelicula, {
  through: PeliculaSucursal,
  foreignKey: "sucursalId",
});

export { Pelicula, Sucursal, PeliculaSucursal };
