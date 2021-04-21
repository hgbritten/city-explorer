import React from 'react';
// import weather from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


class Movie extends React.Component {

  render() {

    return (
      this.props.movies.map((day, idx) => (
        <>
          <ListGroup.Item key={idx} as="li" active>
            Title: {day.title},
            {/* , Average Votes: {day.average_votes}, Total Votes: {day.total_votes}, Release Date: {day.released_on} */}
          </ListGroup.Item>
          <ListGroup.Item key={idx} as="li" active>
            Rating: {day.popularity}

          </ListGroup.Item>
          <ListGroup.Item key={idx} as="li" active>

            Overview: {day.overview}
          </ListGroup.Item>
          <br>
          </br>
        </>
      ))
    );
  }
}

export default Movie;
