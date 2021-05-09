import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'
import "../css/map.css"
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
const STYLE = process.env.REACT_APP_MAPBOX_STYLE;

function Map(props) {
    const mapContainer = useRef();
    const [lng, setLng] = useState("");
    const [lat, setLat] = useState("");

    useEffect(()=>{
        setLng(props.lng);
        setLat(props.lat);
    },[props]);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: STYLE,
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