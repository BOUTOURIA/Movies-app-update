import "./App.css";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Avengers",
      description:
        "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
      posterURL: "./theAvengers.jpg",
      rating: "2",
    },
    {
      id: 2,
      title: "Tomb Raider",
      description:
        "Lara Croft Lorem 20 ",
      posterURL: "./TombRaider.jpg",
      rating: "4",
    },
    {
      id: 3,
      title: "Mission",
      description:
        " lorem  ",
      posterURL: "./jpg.jpg",
      rating: "5",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterUrl] = useState("");
  const [rating, setRating] = useState(0);

  const [filtredMovies, setFiltredMovies] = useState(movies);

  const addMovie = () => {
    let newMovie = {
      id: movies[movies.length - 1].id + 1,
      title: title,
      description: description,
      posterURL: posterURL,
      rating: rating,
    };
    setMovies([...movies, newMovie]);
    setFiltredMovies([...movies, newMovie]);
  };

  const filterHandler = (e) => {
    let filtredList;
    if (!parseInt(e.target.value)) {
      filtredList = movies.filter((movie) =>
        movie.title.includes(e.target.value)
      );
    } else {
      filtredList = movies.filter((movie) => movie.rating >= e.target.value);
    }
    setFiltredMovies(filtredList);
  };

  return (
    <div className="App">
      <div className="new-movie">
        <div className="input-group">
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Rating: </label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Image: </label>
          <input
            type="text"
            value={posterURL}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </div>

        <button className="add-movie" onClick={addMovie}>
          Add Movie
        </button>
      </div>
      <div className="list">
        <Filter onChange={filterHandler} />
        <MovieList movies={filtredMovies} />
      </div>
    </div>
  );
}

export default App;
