import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const LeafletMap = () => {
    type test = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
      }
    const position = [ 51.505, -0.09 ]
    return (
        <Map center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
    );
};

export default LeafletMap;