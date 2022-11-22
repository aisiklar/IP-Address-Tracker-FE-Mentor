import "./App.css";
import Header from "./components/header/Header.component";
import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MyComponent from "./components/Leaflet/MyComponent.component";
import markerIcon from 'leaflet';

function App() {
  console.log("render App()");
  const [coord, setCoord] = useState([]);
  console.log("coord: ", coord);

  const coordHandler = (coordValues) => {
    console.log("coordValues are: ", coordValues);
    setCoord(coordValues);
  };

  // can be deleted afterwards
  /*   useEffect(() => {
    console.log("in the use effect to change coord.");
    setCoord([36.6, 46.2]);
  }, []); */

  const myIcon = markerIcon({
    iconUrl:'./images2/icon-location.svg'
  })

  return (
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
            <Marker position={coord} icon={myIcon} ></Marker>
          </MapContainer>
        </div>
      ) : null}
    </div>
  );
}

export default App;
