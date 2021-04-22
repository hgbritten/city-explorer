import React from 'react';
// import weather from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


class Movie extends React.Component {

  render() {

    return (
      this.props.movies.map((day, idx) => (

        <ListGroup.Item key={idx} as="li" active>
          <h2>Title: {day.title}
          </h2>
          <p>
            Rating: {day.popularity}
          </p>
          <p>
            Overview: {day.overview}
          </p>
          {/* , Average Votes: {day.average_votes}, Total Votes: {day.total_votes}, Release Date: {day.released_on} */}
        </ListGroup.Item>

      ))
    );
  }
}

export default Movie;
