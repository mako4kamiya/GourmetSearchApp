import { useRef, useEffect, useState } from "react";
import "../css/home.css";
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFrbzRrYW1peWEiLCJhIjoiY2tvOXRiMGl5MmtydjJwcXc4cXN6cTNmbiJ9.25AHY8Eey5RTzOXyIvVC3A';

function Map() {
    const mapContainer = useRef();
    const style = "mapbox://styles/mako4kamiya/cko9xdnpd0nlq18qbpf0c787x";
    // const [lng, setLng] = useState(127.95762682904041);
    // const [lat, setLat] = useState(26.687547737468357);
    const [lng, setLng] = useState('');
    const [lat, setLat] = useState('');

    function success(Position) {
        setLng(Position.coords.longitude);
        setLat(Position.coords.latitude);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
    //Geolocation APIを利用できない環境向けの処理
    }

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: style,
            center: [lng, lat],
            zoom: "13"
        });
        return () => map.remove();
    }, [lng, lat]);

    return (
        <div className="map-container" ref={mapContainer}></div>
    );
}
export default Map;