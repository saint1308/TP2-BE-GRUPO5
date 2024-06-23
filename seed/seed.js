import seedPeliculas from "./peliculaSeed.js";
import seedSucursal from "./sucursalSeed.js";

const seed = async () => {
    seedPeliculas()
    seedSucursal()
}

export default seed



