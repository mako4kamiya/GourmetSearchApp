import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import List from "../pages/List";
import Filter from "../pages/Filter";
import Home from "../pages/Home";

const KEY = process.env.REACT_APP_HOTPEPPER_API_KEY
// const REQUEST_URL = `https://cors-for-gourmet-search-app.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${KEY}&format=json&type=credit_card&range=5`
const REQUEST_URL = `https://cors-for-gourmet-search-app.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${KEY}&format=json&type=credit_card`

function App() {
    const [lng, setLng] = useState("");
    const [lat, setLat] = useState("");
    const [baseUrl, setBaseUrl]  = useState("");
    const [query, setQuery] = useState(false);
    const [option, setOption] = useState("");
    const [shops, setShops] = useState([]);

    function getLocation(option) {
        return new Promise(function(resolve, reject, option) {
            navigator.geolocation.getCurrentPosition(resolve, reject, option);
        });
    }
    async function createBaseState() {
        try {
            let Location = await getLocation();
            let lng = Location.coords.longitude;
            let lat = Location.coords.latitude;
            let baseUrl = `${REQUEST_URL}&lat=${lat}&lng=${lng}`;
            setLng(lng);
            setLat(lat);
            setBaseUrl(baseUrl);
            setQuery(baseUrl);
        } catch(err) {
            console.log(err);
        }
    }
    async function getShopInfo(query,option) {
        try {
            let res = await axios.get(query + option);
            setShops(res.data.results.shop);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        createBaseState();
    },[]);

    useEffect(()=>{
        if (query) {
            getShopInfo(query, option);
        }
    },[query, option])

    return (
        <Switch>
            <Route path="/list">
                <List shops={shops}/>
            </Route>
            <Route path="/filter">
                <Filter shops={shops} setOption={setOption}/>
            </Route>
            <Route path="/">
                <Home lng={lng} lat={lat} shops={shops}/>
            </Route>
        </Switch>
    );
}
export default App;