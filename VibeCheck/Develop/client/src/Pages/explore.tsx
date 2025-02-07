import { } from "react";
import CardItem from "../components/card-item";
import GenreGenerator from "../components/genre-generator";

const Explore = () => {

  return (
    <div>
      <h1>Check Your Vibe</h1>
      <CardItem/>
      <div>
        <h1>Click here to generate a new genre to explore</h1>
        <GenreGenerator/>
      </div>
    </div>
  )
};

export default Explore;