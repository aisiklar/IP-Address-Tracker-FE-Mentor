import "./App.css";
import Header from "./components/header/Header.component";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="leaflet-map">
        <MapContainer className="map-container"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
