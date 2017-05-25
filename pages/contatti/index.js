import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import _ from 'lodash';
// import {
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from 'react-google-maps';
import Layout from '../../layout';

const inlineStyle = {
  position: 'relative',
  background: 'rgb(255, 255, 255)',
  borderRadius: 3,
  color: 'rgb(0, 0, 0)',
  width: 85,
  padding: 10,
}

const BusinessPin = ({ name, address, city, Phone, email }) => (
  <div style={inlineStyle}>
    {name}<br />
    {address}<br />
    {city}<br />
    {Phone}<br />
    {email}<br />
  </div>);
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 46.0521699, lng: 11.4092506},
    zoom: 11
  };
 
  render() {
    return (
      <Layout>
        <div className="someClass">This is red</div>
        <div style={{ width: '100%', height: '400px' }}>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <BusinessPin
              lat={46.0521699}
              lng={11.4092506}
              name="Frazionamento.it"
              address="Via A.Pola n.3 38050"
              city="Roncegno Terme (TN)"
              Phone="+39.0461.525388"
              email="info@frazionamento.it"
            />
          </GoogleMapReact>
        </div>
      </Layout>
    );
  }
}

export default SimpleMap;


/*
const AnotherMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default SimpleMap;*/

 
// const markers = [{
//   position: {
//     lat: 25.0112183,
//     lng: 121.52067570000001,
//   },
//   key: `Taiwan`,
//   defaultAnimation: 2,
// }];


/*// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));
// Then, render it:
export default () => (
  <GettingStartedGoogleMap
    containerElement={
      <div style={{ height: `100%` }} />
    }
    mapElement={
      <div style={{ height: `100%` }} />
    }
    onMapLoad={_.noop}
    onMapClick={_.noop}
    markers={markers}
    onMarkerRightClick={_.noop}
  />
);*/
