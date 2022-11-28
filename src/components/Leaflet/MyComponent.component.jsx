import { useMap } from 'react-leaflet/hooks'
import { useEffect } from 'react';

const MyComponent = (props) => {
    console.log('props.mapCoord: ', props.mapCoord);
    const [lat, lng] = props.mapCoord;
    console.log('lat: ', lat);
    console.log('lng: ', lng);

    const map = useMap();
    useEffect(()=>{
    console.log('in the useEffect to flyTo new coord.');
    map.flyTo([lat, lng], map.getZoom());

    }, [lat, lng]);

    console.log('map center:', map.getCenter())
   // map.setCenter(props.centerCoords);
    return null;
}

export default MyComponent;