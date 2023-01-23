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

  console.log(viewPort);

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
    <div className="h-screen">
      <Arrowback />
      <Header title={translate("Add New Address", language)} />
      <input
        placeholder="ابحث عن شارع أو معلم شهیر"
        className="z-10 relative top-16 left-10 h-12 w-72 input_serach_map"
      />
      <div className="flex justify-center rounded-3xl mt-2">
        <Map
          initialViewState={{
            latitude: 37.8,
            longitude: -122.4,
            zoom: 14,
          }}
          style={{ width: 346, height: 346 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <Marker
            draggable={true}
            longitude={-122.4}
            latitude={37.8}
            color="red"
          />
          <GeolocateControl ref={geolocateControlRef} />
        </Map>
      </div>
    </div>
  );
};

export default MapPage;
