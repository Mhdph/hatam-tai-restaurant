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

  return (
    <Map
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
      }}
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
  );
};

export default MapPage;
