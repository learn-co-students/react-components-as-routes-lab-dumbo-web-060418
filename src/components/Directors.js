import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const mappedMovies = (director) => {
    return director.movies.map(movie => {
      return <li>{movie}</li>
    })
  }

  const mappedDirectors = directors.map(director => {
    return (
      <div>
        <h3>Name: {director.name}</h3>
        <p>Movies:</p>
        <ul>
          {mappedMovies(director)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {mappedDirectors}
    </div>
  );
}

export default Directors
