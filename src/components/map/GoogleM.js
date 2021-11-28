import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};


function GoogleM() {
    return (
        <Map
        // google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAFJMpPc5cXaJreRpwYe4qbD-th7neivOk'
  })(GoogleM);