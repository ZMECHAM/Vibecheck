import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer', '');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as { userId: number };

        req.user = decoded;
        next();
      } catch (err) {

        return res.status(400).json({error: 'Invalid token.'});
      }
};