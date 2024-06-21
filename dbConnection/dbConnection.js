import mysql from "mysql2/promise";

const connection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "tp2-cine",
      port: "3306"
    });

    const ok = await connection.connect();
    if (ok){
        console.log("ok")

        return connection

    }
  } catch (error) {
    console.log(error);
  }
};

const dbConennection = await connection()

export default dbConennection;
