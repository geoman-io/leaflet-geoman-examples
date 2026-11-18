import React from "react";
import { MapContainer } from "react-leaflet";
import BasemapLayer from "./BasemapLayer";
import { GeomanControl } from "./GeomanControl";
import Events from "./Events";
import {GeoSearchControlComponent} from "./GeoSearch";

const Map = () => {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100vw", height: "100vh" }}
      >
        <BasemapLayer />

        <GeomanControl position="topleft" oneBlock />
        <Events />
        <GeoSearchControlComponent />
      </MapContainer>
    </>
  );
};

export default Map;
