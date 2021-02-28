
import logo from './logo.svg';
import React from 'react';
import './App.css';
import { profiles, users, movies } from './data.js';
import PopularMovies from './PopularMovies';
import MovieCardsList from './MovieCardsList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
        <p>Exercise - Functional Component</p>
      </header>
      <main className="App-main">
        <h2>How Popular is Your Favorite Movie?</h2>
        <PopularMovies profiles={profiles} users={users} movies={movies} />
        <MovieCardsList profiles={profiles} movies={movies} users={users} />
      </main>
    </div>
  );
};

export default App;

