import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 27.698778, lng: 85.335782 }}
      />
    </div>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export const GoogleMaps = () => {
  return (
    <div className="map">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyALlgbs9fDd53YeV7inHfmVjhXac8BTWAY`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};
