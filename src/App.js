import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
    }
  }
  getLocation = async (e) => {
    try {
      e.preventDefault();

      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

      const res = await axios.get(API);

      const location = res.data[0];

      this.setState({ location, error: false });
    } catch (error) {
      console.log('Houston we have an error');
      { this.setState({ error: true }) }
    }

  }
  render() {
    return (
      <>
        <div>
          <form id="form"> Where do you want to go? <br>
          </br>
            <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
            <button onClick={this.getLocation}>Explore!</button>
          </form>
          {this.state.error &&
            <div class="alert alert-primary" role="alert">
              Please enter a valid city name!
          </div>
          }
          {this.state.location.place_id &&
            <h2>The city is: {this.state.location.display_name}</h2>
          }
          {this.state.location.lat &&
            <h3>{this.state.location.lat}, is the latitude and {this.state.location.lon}, is the longitude. </h3>}
          <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`} alt={this.state.location.display_name} />
        </div>
      </>
    )
  }
}



export default App;
