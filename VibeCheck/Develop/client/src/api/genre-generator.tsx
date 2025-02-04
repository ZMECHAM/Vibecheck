import React, { useState } from 'react';

type GenreResponse = string;

const GenreGenerator: React.FC = () => {
  const [genre, setGenre] = useState<GenreResponse | null>(null);

  const fetchGenre = async () => {
    try {
      const response = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data: GenreResponse = await response.json();
      setGenre(data);
    } catch (error) {
      console.error('Error fetching genre:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchGenre}>Generate Genre</button>
      {genre && <p>Random Genre: {genre}</p>}
    </div>
  );
};

export default GenreGenerator;