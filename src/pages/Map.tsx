import React, { FC, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { AttributionControl } from "react-map-gl";
import { GeolocateControl } from "react-map-gl";
import { NavigationControl } from "react-map-gl";
import Header from "../components/Common/Header";
import { translate } from "../i18n";
import Arrowback from "../components/Common/Arrowback";
import MapSearch from "../components/Map/MapSearch";
const MapPage = () => {
  const center = { latitude: 48.8584, longitude: 2.2945 };
  const initialValue = {
    width: "100%",
    height: "100%",
    latitude: (center && center?.latitude) || 0.0,
    longitude: (center && center?.longitude) || 0.0,
    zoom: 14,
  };

  const [viewPort, setViewPort] = useState(initialValue);

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibWRocGgiLCJhIjoiY2xjdWl2YTlpMHZnODNvczF3MjJvMmhleSJ9.jmlbzAmRD4BE0qsLyYVdXA"; // Set your mapbox token here

  const mapContainer = React.useRef<any>(null);
  const mapRef = React.useRef<any>({
    latitude: (center && center?.latitude) || 0.0,
    longitude: (center && center?.longitude) || 0.0,
  });
  const [longitude, setLongitude] = useState(-70.9);
  const [latitude, setLatitude] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const language = localStorage.getItem("language");
  // React.useEffect(() => {
  //   if (mapRef.current) return; // initialize map only once
  //   mapRef.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/streets-v12",
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });
  // });

  const onMapLoad = React.useCallback(() => {
    mapRef.current.on("move", () => {
      setLongitude(mapRef.current.getCenter().lng.toFixed(4));
      setLatitude(mapRef.current.getCenter().lat.toFixed(4));
      setZoom(mapRef.current.getZoom().toFixed(2));
    });
  }, []);

  const geolocateControlRef = React.useCallback((ref: any) => {
    if (ref) {
      // Activate as soon as the control is loaded
      ref.trigger();
    }
  }, []);

  const [selectedLocation, serSelectedLocation] = useState();

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
