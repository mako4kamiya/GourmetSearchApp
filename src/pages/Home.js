import { useRef, useEffect, useState } from "react";
import "../css/home.css";
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFrbzRrYW1peWEiLCJhIjoiY2tvOXRiMGl5MmtydjJwcXc4cXN6cTNmbiJ9.25AHY8Eey5RTzOXyIvVC3A';

function Home() {
    const mapContainer = useRef();
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mako4kamiya/cko9xdnpd0nlq18qbpf0c787x',
            center: [lng, lat],
            zoom: zoom
        });
        return () => map.remove();
    }, []);

    return (
    <div className="map-container" ref={mapContainer}></div>
    );
}
export default Home;