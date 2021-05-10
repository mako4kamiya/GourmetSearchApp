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
    const [baseUrl, setBaseUrl]  = useState("");
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState(false);
    // console.log(lng, lat, query);

    function createQuery(obj) {
        let newUrl = baseUrl;
        for (const [key, value] of Object.entries(obj)) {
            console.log(key, value);
            const options = `&${key}=${value}`;
            newUrl += options;
        }
        console.log(newUrl);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((res) => {
            setLng(res.coords.longitude);
            setLat(res.coords.latitude);
            setLocation(true);
        });
    },[]);

    useEffect(()=>{
        setBaseUrl(`https://cors-for-gourmet-search-app.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${KEY}&lat=${lat}&lng=${lng}&format=json&type=credit_card&range=5`);
        setQuery(`https://cors-for-gourmet-search-app.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${KEY}&lat=${lat}&lng=${lng}&format=json&type=credit_card&range=5`);
    },[lng, lat]);

    useEffect(()=>{
        if(location){
            axios.get(`${query}`)
                .then((res)=>{
                // console.log(res);
                setShops(res.data.results.shop);
            });
        }
        const obj = {'a': 1, 'b': 2, 'c': 3};
        createQuery(obj);
    },[query]);

    return (
        <Switch>
            <Route path="/list">
                <List shops={shops}/>
            </Route>
            <Route path="/filter">
                <Filter shops={shops} createQuery={createQuery}/>
            </Route>
            <Route path="/">
                <Home lng={lng} lat={lat} shops={shops}/>
            </Route>
        </Switch>
    );
}
export default App;