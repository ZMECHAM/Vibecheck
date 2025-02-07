import { useEffect, useState } from "react";
import CardItem, { CardItemProps } from "../components/card-item";
import GenreGenerator from "../components/genre-generator";

type Song = CardItemProps["song"];

const Explore = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const userId = ""; // Replace with actual user data or fetch from context/local storage

  // Fetch a song from Spotify API (replace the URL with actual API call)
  const fetchSong = async () => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/recommendations",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, //Use your Spotify token
          },
        }
      );
      const data = await response.json();
      setCurrentSong(data.tracks[0]);
    } catch (error) {
      console.error("Error fetching song:", error);
    }
  };

  // Like a song
  const handleLike = async () => {
    if (!currentSong) return;

    try {
      await fetch(`http://localhost:3001/api/likedsongs`, {
        method: "POST",
        headers: { "Content-Type": "application.json" },
        body: JSON.stringify({
          userId: userId,
          songId: currentSong.id,
          title: currentSong.name,
          artist: currentSong.artists[0].name,
        }),
      });
      fetchSong(); // Fetch the next song arfter linking
    } catch (error) {
      console.error("Error linking song:", error);
    }
  };

  // Pass a song (just fetch the next one)
  const handlePass = () => {
    fetchSong();

    useEffect(() => {
      fetchSong(); // Fetch the first song on component load
    }, []);
  };

  return (
    <div>
      <h1>Check Your Vibe</h1>
      {currentSong && (
        <CardItem song={currentSong} onLike={handleLike} onPass={handlePass} />
      )}
      <div>
        <h1>Click here to generate a new genre to explore</h1>
        <GenreGenerator />
      </div>
    </div>
  );
};

export default Explore;
