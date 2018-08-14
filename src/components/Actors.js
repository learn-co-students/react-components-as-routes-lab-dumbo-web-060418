import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const mappedMovies = (actor) => {
    return actor.movies.map(movie => {
      return <li>{movie}</li>
    })
  }

  const mappedActors = actors.map(actor => {
    return (
      <div>
        <h3>Name: {actor.name}</h3>
        <p>Movies:</p>
        <ul>
          {mappedMovies(actor)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {mappedActors}
    </div>
  );
};

export default Actors;
