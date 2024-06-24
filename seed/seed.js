import seedPeliculas from "./peliculaSeed.js";
import seedSucursal from "./sucursalSeed.js";
import seedPeliculaSucursal from "./peliculaSucursalSeed.js"

const seed = async () => {
    await seedPeliculas()
    await seedSucursal()
    await seedPeliculaSucursal()
}

export default seed



