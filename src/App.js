import "./App.css";
import Header from "./components/header/Header.component";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet/Marker";
import MyComponent from "./components/Leaflet/MyComponent.component";
import iconLoc from "./images2/icon-location.svg";
import L from "leaflet";

function App() {
  const [coord, setCoord] = useState([]);

  // receives the coord values from the Header comp and assigns it to coord state
  // coord is to be sent to MyComponent so that the map center is changed.
  const coordHandler = (coordValues) => {
    setCoord(coordValues);
  };

  // to change the default icon of the leafler.js
  const myIcon = new L.Icon({
    iconUrl: iconLoc,
  });

  return (
    <main>
      <div className="App">
        <Header mapCoord={coordHandler}></Header>
        {coord.length > 0 ? (
          <div className="leaflet-map">
            <MapContainer
              className="map-container"
              center={coord}
              zoom={13}
              scrollWheelZoom={false}
            >
              <MyComponent mapCoord={coord}></MyComponent>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={coord} icon={myIcon}></Marker>
            </MapContainer>
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default App;
