import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class UserLocation extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
      if(this.state.errorMessage && !this.state.lat) {
        return <div style={{textAlign: "center"}}>Unknown Geolocation</div>;
      }

      if(!this.state.errorMessage && this.state.lat) {
        return (
        <SeasonDisplay lat={this.state.lat} />
        )
      }

      return <Spinner />
  }
}


export default UserLocation;