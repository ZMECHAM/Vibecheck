// TODO NEEDS WORK.

// import { useEffect, useState } from "react";

// const LikedSongs = () => {
//   const [likedSongs, setLikedSongs] = useState<
//     { id: number; title: string; artist: string; assignedUserId: number; }[]
//   >([]);
//   // const userId = "1"; // Replace with actual user data

//   useEffect(() => {
//     fetch(`api/songs`) // Replace with actual path
//       .then((response) => response.json()) // Coverts response to json
//       .then((data) => setLikedSongs(data)) // Update state with fetched data
//       .catch((error) => console.error("Error fetching liked songs:", error));
//   }, []); //Runs again if the userId changes

//   return (
//     <div className="ls-container">
//       <h2 className="ls-title">Liked Songs!</h2>

//       {/* Display a message if there are no liked songs */}
//       {likedSongs.length === 0 ? (
//         <p>No liked songs yet.</p>
//       ) : (
//         <ul className="ls-ul">
//           {/* Loop through liked songs and display each one */}
//           {likedSongs.map((song) => (
//             <li key={song.id} className="ls-li">
//               {song.title} - {song.artist}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default LikedSongs;



import { useEffect, useState } from "react";
import { getSongs } from "../api/userAPI";

const LikedSongs: React.FC = () => {
  const [likedSongs, setLikedSongs] = useState<string[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getSongs(); 
      setLikedSongs(songs);
    };

    fetchSongs();
  }, []);

  return (
    <div className="ls-container">
      <h2 className="ls-title">Liked Songs!</h2>

      {/* Display a message if there are no liked songs */}
      {likedSongs.length === 0 ? (
        <p>No liked songs yet.</p>
      ) : (
        <ul className="ls-ul">
          {/* Loop through liked songs and display each one */}
          {likedSongs.map((songs) => (
            <li key={songs.id} className="ls-li">
              {songs.title} - {songs.artist}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LikedSongs;
