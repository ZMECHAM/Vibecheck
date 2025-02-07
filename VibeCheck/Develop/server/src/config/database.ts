import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Loads enviorment variable from the .env file

// Create a new Sequelize instance
const sequelize = new Sequelize('vibe_check_db','postgres','asdf', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
});

export default sequelize;
