import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'
import "../css/map.css"
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken = 'pk.eyJ1IjoibWFrbzRrYW1peWEiLCJhIjoiY2tvOXRiMGl5MmtydjJwcXc4cXN6cTNmbiJ9.25AHY8Eey5RTzOXyIvVC3A';

function Map(props) {
    const mapContainer = useRef();
    const style = "mapbox://styles/mako4kamiya/cko9xdnpd0nlq18qbpf0c787x";
    const [lng, setLng] = useState("");
    const [lat, setLat] = useState("");

    useEffect(()=>{
        setLng(props.lng);
        setLat(props.lat);
    },[props]);

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
        <div id="Map" ref={mapContainer}></div>
    );
}
export default Map;