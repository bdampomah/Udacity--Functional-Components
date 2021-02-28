import React from 'react';
import UserList from './UserList';

const PopularMovies = props => {
  const { profiles, users, movies } = props;
  const moviesArr = Object.values(movies);
  return (
    <div className="PopularMovies-container">
      {moviesArr.map(movie => (
        <div key={movie.id} className="PopularMovies-cell">
          <h3>{movie.name}</h3>
          <UserList movieID={movie.id} users={users} profiles={profiles} />
        </div>
      ))}
    </div>
  );
};

export default PopularMovies;
