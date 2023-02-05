import "mapbox-gl/dist/mapbox-gl.css";
import { useCallback, useState } from "react";
import Map, { LngLat, Marker, MarkerDragEvent } from "react-map-gl";
import GeocoderControl from "../components/Map/MapSearch";
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
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        ></Marker>
        <GeocoderControl mapboxAccessToken={MAPBOX_TOKEN} position="top-left" />
      </Map>
    </div>
  );
};

export default MapPage;
