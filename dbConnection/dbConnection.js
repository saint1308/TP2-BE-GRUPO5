import { Sequelize } from "sequelize";

const dbConennection = new Sequelize("tp2-cine", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

try {
  await dbConennection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default dbConennection;
