import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import List from "../pages/List";
import Filter from "../pages/Filter";
import Home from "../pages/Home";

const KEY = process.env.REACT_APP_HOTPEPPER_API_KEY

function App() {
    const [lng, setLng] = useState("");
    const [lat, setLat] = useState("");
    const [shops, setShops] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((res) => {
            setLng(res.coords.longitude);
            setLat(res.coords.latitude);
        });
    },[]);

    useEffect(()=>{
        axios.get(`https://cors-for-gourmet-search-app.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${KEY}&lat=${lat}&lng=${lng}&type=credit_card&format=json`)
            .then((res)=>{
            setShops(res.data.results.shop);
        });
    },[lng, lat]);

    return (
        <Switch>
            <Route path="/list">
                <List shops={shops}/>
            </Route>
            <Route path="/filter">
                <Filter shops={shops}/>
            </Route>
            <Route path="/">
                <Home lng={lng} lat={lat} shops={shops}/>
            </Route>
        </Switch>
    );
}
export default App;