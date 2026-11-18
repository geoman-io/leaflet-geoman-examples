import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { leafletLayer } from "protomaps-leaflet";

// Vector basemap: the Protomaps OpenStreetMap planet served by
// simple.turbotiles.dev (no API key), drawn on canvas by protomaps-leaflet.
// Integration guide: https://simple.turbotiles.dev/docs
const TILES_URL = "https://simple.turbotiles.dev/planet/{z}/{x}/{y}.mvt";
const ATTRIBUTION =
  '<a href="https://protomaps.com" target="_blank">Protomaps</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>';

type Props = {
  /** light, dark, white, grayscale or black */
  flavor?: string;
  /** Label language, e.g. en, no, da, sv */
  lang?: string;
};

const BasemapLayer = ({ flavor = "light", lang = "en" }: Props) => {
  const map = useMap();

  useEffect(() => {
    const layer = leafletLayer({
      url: TILES_URL,
      flavor,
      lang,
      attribution: ATTRIBUTION,
    });
    layer.addTo(map);
    return () => {
      layer.remove();
    };
  }, [map, flavor, lang]);

  return null;
};

export default BasemapLayer;
