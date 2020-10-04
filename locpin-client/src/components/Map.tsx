import * as React from "react";
import { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngTuple } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import Buttons from "./Buttons";
import "./map.css";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = () => {
	const defPositions: LatLngTuple[] = [
		[59.33258, 18.0649],
		[59.33258, 18.12345],
	];

	const [activeMarkers, setActiveMarkers] = useState(defPositions);

	const addMarkers = (e: { latlng: any }) => {
		activeMarkers.push([e.latlng.lat, e.latlng.lng]);
		setActiveMarkers(activeMarkers);
		console.log(activeMarkers);
	};

	return (
		<>
			<Buttons />
			<Map center={[59.33258, 18.0649]} zoom={13} onclick={addMarkers}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
				/>

				{activeMarkers.map((position: LatLngTuple, idx) => (
					<Marker
						key={`marker-${idx}`}
						position={position}
						onMouseOver={(e: { target: { openPopup: () => void } }) => {
							e.target.openPopup();
						}}
						onMouseOut={(e: { target: { closePopup: () => void } }) => {
							e.target.closePopup();
						}}>
						<Popup closeButton={false}>Popup</Popup>
					</Marker>
				))}
			</Map>
		</>
	);
};

export default LeafletMap;
