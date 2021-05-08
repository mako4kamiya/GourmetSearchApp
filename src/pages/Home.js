import { useEffect, useState } from "react";
import Header from "../components/Header";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import Map from "../components/Map";
import Shop from "../components/Shop";
import "../css/home.css";

function Home(props) {
    const [lng, setLng] = useState("");
    const [lat, setLat] = useState("");
    const [shops, setShops] = useState([]);

    const headerTitle = "周辺の検索";
    const headerLeft = <FormatListBulletedIcon/>;
    const headerLeftPath = "/list";
    const headerRight = <FilterNoneIcon />;

    useEffect(()=>{
        setLng(props.lng);
        setLat(props.lat);
    },);

    useEffect(()=>{
        setShops(props.shops);
    },);

    return (
        <div id="Home">
            <Header
                headerTitle={headerTitle}
                headerLeft= {headerLeft}
                headerLeftPath={headerLeftPath}
                headerRight={headerRight}
            />
            <Map lng={lng} lat={lat}/>
            <Shop shops={shops}/>
        </div>
    );
}
export default Home;