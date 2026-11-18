import { MapContainer } from "react-leaflet";
import BasemapLayer from "./components/BasemapLayer";
import Events from "./components/Events";
import { GeomanControl } from "./components/GeomanControl";
const App = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "100vw", height: "100vh" }}
    >
      <BasemapLayer />

      <GeomanControl position="topleft" oneBlock />
      <Events />
    </MapContainer>
  );
};

export default App;
