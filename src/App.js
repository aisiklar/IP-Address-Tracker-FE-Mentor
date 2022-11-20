import "./App.css";
import Header from "./components/header/Header.component";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MyComponent from "./components/Leaflet/MyComponent.component";

function App() {
  console.log("render App()");
  const [coord, setCoord] = useState([51, -0.09]);
  console.log("coord: ", coord);
  let initialPosition = [51, -0.09];

  const coordHandler = (coordValues) => {
    console.log("coordValues are: ", coordValues);
    setCoord(coordValues);
  };

  // can be deleted afterwards
  useEffect(() => {
    console.log("in the use effect to change coord.");
    setCoord([36.6, 46.2]);
  }, []);

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
          <MyComponent mapCoord={[36.3, 24.5]}></MyComponent>
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
