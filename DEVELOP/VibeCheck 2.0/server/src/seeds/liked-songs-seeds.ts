import { Song } from '../models/index.js';

export const seedSongs = async () => {
  await Song.bulkCreate(
    [
      { title: 'Never Gonna Give You Up', artist: 'Rick Astley', assignedUserId: 1 }
    ]);
};
