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
  
  /*Dont know if we still need this code or not
import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await User.create({ name, email, password: hashedPassword});
        res.json({message: "User Created!", user: newUser});
    } catch (error) {
        res.status(400).json({error: "User already exists"});
    }
});
*/


