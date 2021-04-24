import React from "react";

function movieCard({ movie }) {
  return (
    <div className="card">
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
  );
}
export default movieCard;
