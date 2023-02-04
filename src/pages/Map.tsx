import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
const MapPage = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibWRocGgiLCJhIjoiY2xjdWl2YTlpMHZnODNvczF3MjJvMmhleSJ9.jmlbzAmRD4BE0qsLyYVdXA"; // Set your mapbox token here

  const geolocateControlRef = React.useCallback((ref: any) => {
    if (ref) {
      ref.trigger();
    }
  }, []);

  return (
    <div className="flex justify-center rounded-3xl mt-2">
      <Map
        initialViewState={{
          latitude: 24.46,
          longitude: 54.36,
          zoom: 14,
        }}
        style={{ width: 346, height: 346 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          draggable={true}
          longitude={54.36}
          latitude={24.46}
          color="red"
        />
        <GeolocateControl className="bg-red-600" ref={geolocateControlRef} />
      </Map>
    </div>
  );
};

export default MapPage;
