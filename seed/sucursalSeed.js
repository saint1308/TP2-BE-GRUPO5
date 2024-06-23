import Sucursal from "../Model/Sucursal.js";

const seedSucursal = async() =>{

    
     await Sucursal.bulkCreate([
  {
    nombre: "Cineplex Central",
    calle: "Av. Corrientes",
    altura: "1530",
    localidad: "Buenos Aires",
  },
  {
    nombre: "Cinemark Palermo",
    calle: "Beruti",
    altura: "3399",
    localidad: "Buenos Aires",
  },
  {
    nombre: "Hoyts Abasto",
    calle: "Av. Corrientes",
    altura: "3247",
    localidad: "Buenos Aires",
  },
  {
    nombre: "Multiplex Belgrano",
    calle: "Vuelta de Obligado",
    altura: "2199",
    localidad: "Buenos Aires",
  },
  {
    nombre: "Village Recoleta",
    calle: "Vicente López",
    altura: "2050",
    localidad: "Buenos Aires",
  },
]);
}

export default seedSucursal