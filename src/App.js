import "./App.css";
import Header from "./components/header/Header.component";
import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function App() {
  const [coord, setCoord] = useState([51.505, -0.09]);

  console.log('coord: ', coord);

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
          center={coord}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coord}>
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
