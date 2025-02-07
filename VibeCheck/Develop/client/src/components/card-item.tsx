import React from "react";
import Icon from "./icon";

export interface CardItemProps {
  song: {
    id: string;
    name: string;
    artists: { name: string }[];
    album?: { images: { url: string }[] };
    genre: string;
  };
  onLike: () => void;
  onPass: () => void;
}

const CardItem: React.FC<CardItemProps> = ({ song, onLike, onPass }) => {
  return (
    <div className="card-content">
      {/* <cardcontent> */}
      <h2>{song.name}</h2>
      <p>Artist: {song.artists.map((artist) => artist.name).join(", ")}</p>
      <img src={song.album?.images[0].url} alt={`${song.name} album cover`} />
      <p>{song.genre}</p>
      <Icon onLike={onLike} onPass={onPass} />
      {/* </cardcontent> */}
    </div>
  );
};

export default CardItem;
