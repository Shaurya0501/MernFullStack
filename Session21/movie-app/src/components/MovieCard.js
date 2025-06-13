import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>Type: {movie.Type}</p>
      <p>Year: {movie.Year}</p>
      <span>💚</span>
    </div>
  );
}

export default MovieCard;
