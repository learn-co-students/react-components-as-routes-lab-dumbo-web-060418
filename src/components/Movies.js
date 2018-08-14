import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieMap =
      movies.map(movie => {
        return <div>
                  <h4>Name: {movie.title}</h4>
                  <p>Time: {movie.time}</p>
                  <ul>Genres: {movie.genres.map(genre => {
                    return <li>{genre}</li>
                  })}</ul>


              </div>
    })


console.log(movies)

  return (
    <div>
      <h1>Movies Page</h1>
        <h2>{movieMap}</h2>
    </div>
  );
};

export default Movies;
