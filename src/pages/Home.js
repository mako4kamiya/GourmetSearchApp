import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import Map from "../components/Map";
// import Shop from "../components/Shop";


import SwipeableViews from 'react-swipeable-views';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

import "../css/home.css";

function Home() {
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const [shops, setShops] = useState([]);

    const headerTitle = "周辺の検索";
    const headerLeft = <FormatListBulletedIcon/>;
    const headerLeftPath = "/list";
    const headerRight = <FilterNoneIcon />;

    const shopComponents = (shops || []).map(shop =>(
        <div className="card" key={shop.id}>
            <Card>
                <CardActionArea>
                    <CardMedia image={shop.photo.pc.l} title={shop.name}/>
                    <CardContent>
                        <h2>{shop.name}</h2>
                        <span className="open">{shop.address}</span>
                        <p>{shop.open}</p>
                        <div className="chips">
                            {(shop.child.includes("お子様連れOK"))||(shop.child.includes("お子様連れ歓迎"))?
                                <Chip className="chip" size="small" label="お子様連れ対応" color="secondary" icon={<DoneIcon />}/>
                            :
                                <Chip className="chip" size="small" label="お子様連れ対応なし" />
                            }
                            {shop.parking.startsWith("あり")?
                                <Chip className="chip" size="small" label="駐車場あり" color="secondary" icon={<DoneIcon />}/>
                            :
                                <Chip className="chip" size="small" label="駐車場なし"/>
                            }
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    ));

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((res) => {
            setLng(res.coords.longitude);
            setLat(res.coords.latitude);
        });
    },[]);

    useEffect(()=>{
        axios.get(`https://cors-for-gourmet-search-app.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=4c8ae073fc977810&lat=${lat}&lng=${lng}&type=credit_card&format=json`)
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
            <div id="Shop">
                <SwipeableViews className="swipe">
                    {shopComponents}
                </SwipeableViews>
            </div>
        </div>
    );
}
export default Home;