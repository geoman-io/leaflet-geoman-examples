import { MapContainer } from "react-leaflet";
import BasemapLayer from "./component/BasemapLayer";
import { GeomanControl } from "./component/GeomanControl";
import Events from "./component/Events";

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
