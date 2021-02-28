import React from 'react';
import MovieCard from './MovieCard';

const MovieCardsList = props => {
  const { profiles, users, movies } = props;
  const usersByMovie = {}; // create empty object

  profiles.forEach(profile => {
    // loop thru ea. profile item
    const movieID = profile.favoriteMovieID; // get movieID as key
    console.log('movieID:', movieID);

    if (usersByMovie[movieID]) {
      // if this movie key exists
      usersByMovie[movieID].push(profile.userID); // push user onto array
    } else {
      // else if movie key does not exit
      usersByMovie[movieID] = [profile.userID]; // assign user array to key
    }
    console.log('usersByMovie', usersByMovie);
  });

  console.log('Object.keys(movies):', Object.keys(movies));

  const movieCards = Object.keys(movies).map(mID => {
    console.log('------------------ movieCard');
    console.log('id', mID);
    console.log('users', users);
    console.log('usersByMovie[mID]', usersByMovie[mID]);
    console.log('movies[mID]', movies[mID]);

    return (
      <MovieCard
        key={mID}
        users={users}
        usersWhoLikedMovie={usersByMovie[mID]}
        movieInfo={movies[mID]}
      />
    );
  });

  return <div className="PopularMovies-container">{movieCards}</div>;
};

export default MovieCardsList;
