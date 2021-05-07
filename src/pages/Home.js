import { useEffect, useState } from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Shop from "../components/Shop";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import "../css/home.css";

const headerTitle = "周辺の検索";
const headerLeft = <FormatListBulletedIcon/>;
const headerLeftPath = "/list";
const headerRight = <FilterNoneIcon />;

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
        <div id="Home">
            <Header
                headerTitle={headerTitle}
                headerLeft= {headerLeft}
                headerLeftPath={headerLeftPath}
                headerRight={headerRight}
            />
            {/* <Map lng={lng} lat={lat}/> */}
            <Shop />
        </div>
    );
}
export default Home;