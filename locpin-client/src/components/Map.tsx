import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import '../../node_modules/leaflet/dist/leaflet.css'

const LeafletMap = () => {
    /*test = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
      }*/
    const position = [ 51.505, -0.09 ]
    return (
      <Map center={[50, 10]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
    </Map>
    );
};

export default LeafletMap;