import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
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
        <div style={{width: '100%', height: '400px'}}>
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