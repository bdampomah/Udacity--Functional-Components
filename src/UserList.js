import React from 'react';

const UserList = props => {
  const { movieID, profiles, users } = props;
  const filteredProfiles = profiles.filter(
    profile => Number(profile.favoriteMovieID) === movieID
  );

  // console.log(filteredProfiles);
  if (!filteredProfiles || filteredProfiles.length === 0) {
    return <p>None of the current users liked this movie</p>;
  }

  return (
    <div>
      <p>Liked by:</p>
      <ul>
        {filteredProfiles.map(profile => (
          <li key={profile.userID}>{users[profile.userID].name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
