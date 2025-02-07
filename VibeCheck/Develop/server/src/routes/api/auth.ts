import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
import User from '../../models/user';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({error: 'Invalid email or password'});
        }

        if (!user.validatePassword(password)) {
            return res.status(400).json({ error: 'Invalid email or password'});
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET_KEY!,
            { expiresIn: '1h'}

        );

        return res.json({ token });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error'});
    }
});