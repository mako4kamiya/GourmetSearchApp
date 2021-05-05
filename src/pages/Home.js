import { useEffect, useState } from "react";
import Map from "../components/Map";

function Home() {
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const [position, setPosition] = useState(false);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((res) => {
            setLng(res.coords.longitude);
            setLat(res.coords.latitude);
            setPosition(true); //なぜかこれがないと綺麗に描画されない。
        });
    },[position]);


    return (
        <div>
            <h2>This is Home Page</h2>
            <Map lng={lng} lat={lat}/>
        </div>
    );
}
export default Home;