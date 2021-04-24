import "./App.css";
import "./index.css";
import React, { useState } from "react";
import MovieCard from "./movieCard";

function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovie = async e => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b417cb10275e0d9b35893f00fcad4141&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <label className="label" for="query">
          Search Movie
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e Interstellar"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter(movie => movie.poster_path)
          .map(movie => (
            <MovieCard movie={movie} key={movie.key} />
          ))}
      </div>
    </>
  );
}

export default SearchMovie;
