import React from 'react';
// import weather from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


class Movie extends React.Component {

  render() {

    return (
      this.props.movies.map((movie, idx) => (

        <ListGroup.Item key={idx} as="li" active>
          <h2>Title: {movie.title}
          </h2>
          <p>
            Rating: {movie.popularity}
          </p>
          <p>
            Overview: {movie.overview}
          </p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.image}`} alt="img not found" />
          {/* , Average Votes: {movie.average_votes}, Total Votes: {movie.total_votes}, Release Date: {movie.released_on} */}
        </ListGroup.Item>

      ))
    );
  }
}

export default Movie;
