import express from 'express';
import type { Request, Response } from 'express';
import { Song } from '../../models/index.js';
import { User } from '../../models/user.js';

 const router = express.Router();

//  GET /songs - Get all songs
router.get('/', async (_req: Request, res: Response) => {
  try {
    const song = await Song.findAll({
      attributes: { exclude: ['assignedUserId'] },
    });
    res.json(song);
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET /songs/:id - Get song by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const song = await Song.findByPk(id, {
      include: [
        {
          model: User,
          as: 'assignedUser', // This should match the alias defined in the association
          attributes: ['assignedUserId'], //Include only the userName attribute
        },
      ],
    });
    if(song) {
      res.json(song);
    } else {
      res.status(404).json({
        message: 'Song not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// POST /songs - Add new song
router.post('/', async (req: Request, res: Response) => {
  const { title, artist, assignedUserId } = req.body;
  try {
    const newSong = await Song.create({
      title, artist, assignedUserId
    });
    res.status(201).json(newSong);
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// PUT /songs/:id - Update song by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, artist, assignedUserId } = req.body;
  try {
    const song = await Song.findByPk(id);
    if(song) {
      song.title = title;
      song.artist = artist;
      song.assignedUserId = assignedUserId;
      await song.save();
      res.json(song);
    } else {
      res.status(404).json({
        message: 'Song not found'
      });
    }
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// DELETE /songs/:id - Delete song by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const song = await Song.findByPk(id);
    if(song) {
      await song.destroy();
      res.json({ message: 'Song deleted' });
    } else {
      res.status(404).json({
        message: 'Song not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

export { router as songRouter };
