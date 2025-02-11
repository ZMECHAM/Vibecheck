import type { Songs } from '../interfaces/Songs';

const favSong = async (songInfo: Songs) => {
  try {
    const response = await fetch('/api/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(songInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Song information not retrieved, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from song retreival: ', err);
    return Promise.reject('Could not fetch song info');
  }
};

export { favSong };
