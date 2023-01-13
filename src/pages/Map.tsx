// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken =
//   "pk.eyJ1IjoibWRocGgiLCJhIjoiY2w0cW10Y2ttMHNsdzNjcXZnMWc5Y3RwcSJ9.w-Of9aeGb7hI4_bZlZ3q-Q";

// export default function App() {
//   const mapContainer = useRef<any>(null);
//   const map = useRef<any>(null);
//   const [lng, setLng] = useState(54.36);
//   const [lat, setLat] = useState(24.46);
//   const [zoom, setZoom] = useState(9);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [lng, lat],
//       zoom: zoom,
//     });
//   });

//   useEffect(() => {
//     if (!map.current) return; // wait for map to initialize
//     map.current.on("move", () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });

//   return (
//     <div>
//       <div className="sidebar">
//         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//       </div>
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// }
import React, { FC, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MapPage = () => {
  // const center = { latitude: 48.8584, longitude: 2.2945 };
  // const initialValue = {
  //   width: "100%",
  //   height: "100%",
  //   latitude: (center && center?.latitude) || 0.0,
  //   longitude: (center && center?.longitude) || 0.0,
  //   zoom: 14,
  // };

  // const [viewPort, setViewPort] = useState(initialValue);

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibWRocGgiLCJhIjoiY2xjdWl2YTlpMHZnODNvczF3MjJvMmhleSJ9.jmlbzAmRD4BE0qsLyYVdXA"; // Set your mapbox token here

  const [selectedLocation, serSelectedLocation] = useState<any>();
  const [viewState, setViewState] = React.useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 3.5,
  });
  return (
    <div className="flex items-center justify-center">
      <Map
        {...viewState}
        style={{ width: 400, height: 300 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        onMove={(evt) => setViewState(evt.viewState)}
      >
        <Marker longitude={37.8} latitude={-122.4}>
          <p
            role="img"
            aria-label="push-pin"
            // onClick={() =>
            //   serSelectedLocation({ longitude: long, latitude: lat })
            // }
            className="cursor-pointer text-2xl animate-bounce"
          >
            📌
          </p>
        </Marker>
      </Map>
    </div>
  );
};

export default MapPage;
