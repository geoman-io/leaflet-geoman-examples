import { useEffect } from "react";
import { useMap } from "react-leaflet";

const Events = () => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.on("pm:create", (e) => {
        console.log("Shape created:", e);
      });

      map.on("pm:globaleditmodetoggled", (e) => {
        console.log("Shape edited:", e);
      });

      map.on("pm:remove", (e) => {
        console.log("Shape removed:", e);
      });
    }
  }, [map]);

  return null;
};

export default Events;
