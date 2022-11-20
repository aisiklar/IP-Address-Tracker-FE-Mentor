import { useMap } from 'react-leaflet/hooks'
import { useEffect } from 'react';

const MyComponent = (props) => {
    console.log('props.mapCoord: ', props.mapCoord);
    const [lat, lng] = props.mapCoord;
    console.log('lat: ', lat);
    console.log('lng: ', lng);

    const map = useMap();
    useEffect(()=>{
    map.panTo([lat, lng], 0.25);

    }, []);

    console.log('map center:', map.getCenter())
   // map.setCenter(props.centerCoords);
    return null;
}

export default MyComponent;