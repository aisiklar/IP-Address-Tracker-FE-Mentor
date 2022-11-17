import "./App.css";
import Header from "./components/header/Header.component";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import ChangeMap from "./components/Leaflet/ChangeMap.component";

function App() {
  console.log("render App()");
  const [coord, setCoord] = useState([51, -0.09]);
  console.log("coord: ", coord);
  let initialPosition = [51, -0.09];

  const coordHandler = (coordValues) => {
    console.log("coordValues are: ", coordValues);
    setCoord(coordValues);
  };

  return (
    <div className="App">
      <Header mapCoord={coordHandler}></Header>
      <div className="leaflet-map">
        <MapContainer
          className="map-container"
          center={initialPosition}
          zoom={13}
          scrollWheelZoom={false}
        >
          <ChangeMap centerCoords={coord}></ChangeMap>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={initialPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
