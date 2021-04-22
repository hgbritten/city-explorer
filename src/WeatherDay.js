import React from 'react';
// import weather from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component {

  render() {
    return (
      <ListGroup.Item key={this.props.idx} as="li" active>
        {this.props.day.time} is the date and {this.props.day.forecast} is the forecast
      </ListGroup.Item>
    )
  }
}

export default WeatherDay;
