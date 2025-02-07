import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize (
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,

    {
      host: ProcessingInstruction.env.DB_HOST,
      dialect: 'postgres',
      logging: false,
    }
);

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected succesfully.');
    } catch (error) {
        console.error('Unable to connect to the databse:', error);
    }
};

testConnection();

export default sequelize;