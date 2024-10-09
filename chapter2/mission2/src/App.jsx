import React from 'react';
import { MOVIES } from './mocks/movies';
import './App.css';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200"

function App() {
  return (
    <div class="container">
      <div class="movie-list">
        {MOVIES.results.map((movie) => (
          <div key={movie.id} class="movie-item">
            <img
              class="movie-poster"
              src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
              alt={movie.title} 
            />
            <div class="overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;