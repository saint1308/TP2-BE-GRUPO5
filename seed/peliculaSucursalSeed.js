import { PeliculaSucursal } from "../Model/models.js";

const seedPeliculaSucursal = async () => {
  await PeliculaSucursal.bulkCreate([
    {
      peliculaId: 1,
      sucursalId: 1
    },
    {
        peliculaId: 1,
        sucursalId: 2
    },
    {
        peliculaId: 2,
        sucursalId: 1
    },
    
  ]);
};

export default seedPeliculaSucursal;