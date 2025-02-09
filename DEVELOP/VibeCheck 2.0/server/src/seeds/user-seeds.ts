import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      { userName: 'DEV', password: 'asdf' }
    ],
    { individualHooks: true }
  );
};