import React from "react";
import { Map, GoogleApiWrapper,Marker } from "google-maps-react";

import "./GoogleMaps.css";

const GoogleMap = (props) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="MapContainer">
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
        
      >
        <Marker
          title={'The marker`s title will appear as a tool.'}
          name={'SOMA'}
          position={{lat: 47.778519, lng: -122.405640}} />
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: 46.778519, lng: -122.405640}} />
      </Map>
    </div>
    
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCdOKcdqghLbOB5zcPyoMtICXFYtXEif5U",
})(GoogleMap);
