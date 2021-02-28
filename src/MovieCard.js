import React from 'react';

const MovieCard = props => {
  const { users, usersWhoLikedMovie, movieInfo } = props;
  return (
    <div className="PopularMovies-cell" key={movieInfo.id}>
      <h3>{movieInfo.name}</h3>
      {!usersWhoLikedMovie || usersWhoLikedMovie === 0 ? (
        <p>None of the current users liked this movie</p>
      ) : (
        <div>
          <p>Liked by:</p>
          <ul>
            {usersWhoLikedMovie &&
              usersWhoLikedMovie.map(userID => (
                <li key={userID}>{users[userID].name}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
