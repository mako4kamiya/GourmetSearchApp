import { useRef, useEffect, useState } from "react";
import "../css/home.css";
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFrbzRrYW1peWEiLCJhIjoiY2tvOXRiMGl5MmtydjJwcXc4cXN6cTNmbiJ9.25AHY8Eey5RTzOXyIvVC3A';

function Map() {
    const mapContainer = useRef();
    const style = "mapbox://styles/mako4kamiya/cko9xdnpd0nlq18qbpf0c787x";
    const [lng, setLng] = useState('');
    const [lat, setLat] = useState('');

    // let getPotision = new Promise(function(resolve, reject){
    //     navigator.geolocation.getCurrentPosition(resolve, reject);
    // })
    // getPotision
    // .then(res => {
    //     setLng(res.coords.longitude);
    //     setLat(res.coords.latitude);
    // })
    // .catch(err => {
    //     console.warn(`ERROR(${err.code}): ${err.message}`);
    // });

    useEffect(() => {
        console.log(lng);
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: style,
            // center: [lng, lat],
            center: [127.80064329999998, 26.3390386],
            zoom: "13"
        });
        return () => map.remove();
    }, [lng, lat]);

    return (
        <div className="map-container" ref={mapContainer}></div>
    );
}
export default Map;