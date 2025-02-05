import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Loads enviorment variable from the .env file

// Create a new Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME || "vibe_check_db",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: false, // Set to true if you want SQL logs in the console
  }
);

export default sequelize;
