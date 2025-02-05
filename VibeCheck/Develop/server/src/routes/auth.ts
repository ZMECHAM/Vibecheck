import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/User';
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

        res.json({ token });
    }
});