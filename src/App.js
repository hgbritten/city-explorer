import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    }
  }
  getLocation = async (e) => {
    e.preventDefault();
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(API);
    console.log(res.data[0])
    const location = res.data[0];
    console.log('location', location.display_name);
    this.setState({ location, });

    // const loc = await axios.get(img_url);

    // const local = loc.data.lat;
  }
  render() {
    return (
      <>
        <form> Where do you want to go? <br>
        </br>
          <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
          <button onClick={this.getLocation}>Explore!</button>

        </form>

        {this.state.location.place_id &&
          <h2>The city is: {this.state.location.display_name}</h2>
        }
        {this.state.location.lat &&
          <h3>{this.state.location.lat}, is the latitude and {this.state.location.lon}, is the longitude. </h3>}
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`} alt={this.state.location.display_name} />
      </>

    )
  }
}


export default App;
