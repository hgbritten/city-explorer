import React from 'react';
// import weather from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {

  render() {
    return (
      this.props.weather.map((day, idx) => (
        <ListGroup.Item key={idx} as="li" active>
          {day.date} is the date and {day.description} is the forecast
        </ListGroup.Item>
      ))
    );
  }
}

export default Weather;
