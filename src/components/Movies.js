import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const mappedGenres = (movie) => {
    return movie.genres.map(genre => {
      return <li>{genre}</li>
    })
  }

  const mappedMovies = movies.map(movie => {
    return (
      <div>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {mappedGenres(movie)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {mappedMovies}
    </div>
  );
};

export default Movies;
