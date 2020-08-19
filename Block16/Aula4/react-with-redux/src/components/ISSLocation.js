import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { fetchISSLocation } from '../actions'

export class ISSLocation extends Component {

  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    getCurrentISSLocation();
  }
  
  render() {
    const { latitude, longitude } = this.props;
    return (
      <div>
        <div>
            <h2>
              Latitude: {latitude}
            </h2>
            <h2>
              Longitude: {longitude}
            </h2>
            
          </div>
        <div className="map">
          <Map
            center={[0, 0]}
            defaultWidth={700}
            height={450}
            minZoom={1}
            maxZoom={8}
            zoom={1}
          >
            <Marker anchor={[latitude, longitude]} />
          </Map>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    latitude: state.issLocation.latitude,
    longitude: state.issLocation.longitude,
  }
);

const mapDispatchToProps = (dispatch) => ({
  getCurrentISSLocation: () => dispatch(fetchISSLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
