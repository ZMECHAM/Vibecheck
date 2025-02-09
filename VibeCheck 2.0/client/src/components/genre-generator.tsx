// TODO NEEDS CSS

import React, {useState} from 'react';

const GenreGenerator = () => {

  const [genreData, setGenreData] = useState("")

  const fetchGenre = async() => {
    const res = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
    const data = await res.json()
    console.log(data);
    setGenreData(data);
  }
  return (
    <React.Fragment>
      <p> Press button, receive random genre</p>
      <button onClick={fetchGenre}>CLICK ME</button>
      <p>Genre: {genreData}</p>
    </React.Fragment>
  );
}

export default GenreGenerator;
