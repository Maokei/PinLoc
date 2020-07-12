import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import './map.css';

const LeafletMap = () => {
    const position = [ 51.505, -0.09 ]
    return (
    <div className="map-wrapper">
      <Map center={[50, 10]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup.
                        <br />
                        Easily customizable.
                    </Popup>
                </Marker>
      </Map>
    </div>
    );
};

export default LeafletMap;