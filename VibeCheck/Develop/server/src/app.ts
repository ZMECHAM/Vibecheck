import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initUserModel } from './models/user';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

initUserModel(app);

app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});