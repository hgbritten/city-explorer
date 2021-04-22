import React from 'react';
// import weather from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {

  render() {
    return (

      <ListGroup.Item key={this.props.idx} as="li" active>
        <h2>Title: {this.props.movie.title}
        </h2>
        <p>
          Rating: {this.props.movie.popularity}
        </p>
        <p>
          Overview: {this.props.movie.overview}
        </p>
        <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.image}`} alt="img not found" />
        {/* , Average Votes: {movie.average_votes}, Total Votes: {movie.total_votes}, Release Date: {movie.released_on} */}
      </ListGroup.Item>

    )
  }
}

export default Movies;
