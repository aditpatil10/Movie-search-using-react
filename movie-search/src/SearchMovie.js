import "./App.css";
import "./index.css";
import React, { useState } from "react";
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
            <div className="card" key={movie.key}>
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + "poster"}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small>Release date: {movie.release_date} </small>
                </p>
                <p>
                  <small>Ratings: {movie.vote_average} </small>
                </p>
                <p className="card--overview">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchMovie;
