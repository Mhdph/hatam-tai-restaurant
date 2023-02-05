import axios from "axios";
import clsx from "clsx";
import "mapbox-gl/dist/mapbox-gl.css";
import { useCallback, useEffect, useState } from "react";
import Map, { LngLat, Marker, MarkerDragEvent } from "react-map-gl";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import Arrowback from "../components/Common/Arrowback";
import Header from "../components/Common/Header";
import GeocoderControl from "../components/Map/MapSearch";
import { translate } from "../i18n";
const MapPage = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibWRocGgiLCJhIjoiY2xjdWl2YTlpMHZnODNvczF3MjJvMmhleSJ9.jmlbzAmRD4BE0qsLyYVdXA"; // Set your mapbox token here

  const [marker, setMarker] = useState({
    latitude: 24.46,
    longitude: 54.36,
  });
  const [events, logEvents] = useState<Record<string, LngLat>>({});

  const onMarkerDragStart = useCallback((event: MarkerDragEvent) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = useCallback((event: MarkerDragEvent) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));

    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      const endpoint =
        await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${events.onDragEnd.lng},${events.onDragEnd.lat}.json?access_token=pk.eyJ1IjoibWRocGgiLCJhIjoiY2xjdWl2YTlpMHZnODNvczF3MjJvMmhleSJ9.jmlbzAmRD4BE0qsLyYVdXA
`);
      localStorage.setItem("address", endpoint.data.features[0].place_name);
    };
    getAddress();
  }, [events]);

  const language = localStorage.getItem("language");

  return (
    <div className="h-screen">
      <Arrowback />
      <div
        className={clsx(
          language === "EN"
            ? "left_direction font-roboto"
            : "right_direction font-iran"
        )}
      >
        <Header title={translate("Add New Address", language)} />
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
              longitude={marker.longitude}
              latitude={marker.latitude}
              anchor="bottom"
              draggable
              onDragStart={onMarkerDragStart}
              onDrag={onMarkerDrag}
              onDragEnd={onMarkerDragEnd}
            ></Marker>
          </Map>
        </div>
        <button
          className={clsx(
            language === "EN" ? "ml-72" : "ml-10",
            "address_button mt-2 flex capitalize px-4 rounded-lg py-2"
          )}
        >
          <Link to="/addaddress">{translate("Confirm", language)}</Link>
        </button>
      </div>
    </div>
  );
};

export default MapPage;
