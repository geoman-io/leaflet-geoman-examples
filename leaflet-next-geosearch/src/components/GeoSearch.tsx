import { createControlComponent } from "@react-leaflet/core";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

const createGeoSearchInstance = () => {
    const provider = new OpenStreetMapProvider();
    // @ts-ignore
    const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
    });
    return searchControl;
};

export const GeoSearchControlComponent = createControlComponent(createGeoSearchInstance);
