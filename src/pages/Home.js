import { useEffect, useState } from "react";
import axios from "axios";
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
    const [shops, setShops] = useState([]);

    const shopComponents = (shops || []).map(shop =>(
        <Shop shops={shops}/>
    ));

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((res) => {
            setLng(res.coords.longitude);
            setLat(res.coords.latitude);
        });
    },[]);

    useEffect(()=>{
        axios.get(`/gourmet/v1/?key=4c8ae073fc977810&lat=${lat}&lng=${lng}&type=credit_card&format=json`)
            .then((res)=>{
            console.log(res);
            setShops(res.data.results.shop);
        });
    },[lng, lat]);
    console.log(shops);

    return (
        <div id="Home">
            <Header
                headerTitle={headerTitle}
                headerLeft= {headerLeft}
                headerLeftPath={headerLeftPath}
                headerRight={headerRight}
            />
            <Map lng={lng} lat={lat}/>
            {shopComponents}
        </div>
    );
}
export default Home;