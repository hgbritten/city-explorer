import React from 'react';
// import weather from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './WeatherDay';


class Weather extends React.Component {

  render() {

    return (
      this.props.weather.map((day, idx) => (
        <WeatherDay key={idx} day={day} />
      ))
    );
  }
}

export default Weather;
