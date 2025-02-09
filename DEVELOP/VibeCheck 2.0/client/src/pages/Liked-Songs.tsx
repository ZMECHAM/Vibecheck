// TODO NEEDS WORK.

import { useEffect, useState } from "react";

const LikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState<
    { id: number; title: string; artist: string }[]
  >([]);
  const userId = ""; // Replace with actual user data

  useEffect(() => {
    fetch(`/api/songs/${userId}`) // Replace with actual path
      .then((response) => response.json()) // Coverts response to json
      .then((data) => setLikedSongs(data)) // Update state with fetched data
      .catch((error) => console.error("Error fetching liked songs:", error));
  }, [userId]); //Runs again if the userId changes

  return (
    <div className="ls-container">
      <h2 className="ls-title">Liked Songs!</h2>

      {/* Display a message if there are no liked songs */}
      {likedSongs.length === 0 ? (
        <p>No liked songs yet.</p>
      ) : (
        <ul className="ls-ul">
          {/* Loop through liked songs and display each one */}
          {likedSongs.map((song) => (
            <li key={song.id} className="ls-li">
              {song.title} - {song.artist}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LikedSongs;
