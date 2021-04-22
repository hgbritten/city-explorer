import React from 'react';
// import weather from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './MoviesDay';

class Movie extends React.Component {


  render() {
    return (
      this.props.movies.map((movie, idx) => (
        <Movies key={idx} movie={movie} />
      ))
    );
  }
}

export default Movie;
