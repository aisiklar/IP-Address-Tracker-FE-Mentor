import { useMap } from "react-leaflet/hooks";
import { useEffect } from "react";

// this component takes the new coords from App and changes the map center with a nice animation
const MyComponent = (props) => {
  const [lat, lng] = props.mapCoord;

  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], map.getZoom());
  }, [lat, lng]);

  return null;
};

export default MyComponent;
