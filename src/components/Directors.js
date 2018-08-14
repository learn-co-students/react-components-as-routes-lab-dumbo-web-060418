import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)

  const directorMap =
  directors.map(director => {
    return <div>
            <h3>{director.name}</h3>
          <ul>
            {director.movies.map(movie => {
              return <li>{movie}</li>
              })
            }
          </ul>
        </div>

  })





  return (
    <div>
      <h1>Directors Page</h1>
      {directorMap}
    </div>
  );
}

export default Directors
