import React from "react";
import Icon from "./icon";

export interface CardItemProps {
  song: {
    id: number;
    title: string;
    artist: { name: string }[];
    album?: { images: { url: string }[] };
  };
  onLike: () => void;
  onPass: () => void;
}

const CardItem: React.FC<CardItemProps> = ({ song, onLike, onPass }) => {
  return (
    <div className="card-content">
      {/* <cardcontent> */}
      <h2>{song.title}</h2>
      <p>Artist: {song.artist.map((artist) => artist.name).join(", ")}</p>
      <img src={song.album?.images[0].url} alt={`${song.title} album cover`} />
      <Icon onLike={onLike} onPass={onPass} />
      {/* </cardcontent> */}
    </div>
  );
};

export default CardItem;
