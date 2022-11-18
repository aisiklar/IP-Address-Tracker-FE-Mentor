import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

const MyComponent = (props) => {
    console.log('props.centerCoords: ', props.centerCoords);
    const map = useMap();
    console.log('map center:', map.getCenter())
    map.setView(props.centerCoords, map.getZoom());
   // map.setCenter(props.centerCoords);
    return null;
}

export default MyComponent;