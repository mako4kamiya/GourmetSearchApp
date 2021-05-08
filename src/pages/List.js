import { useEffect, useState } from "react";
import Header from "../components/Header";
import RoomIcon from '@material-ui/icons/Room';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import Shop from "../components/Shop";
import css from "../css/list.css";

const headerTitle = "周辺の検索";
const headerLeft = <RoomIcon/>;
const headerLeftPath = "/home";
const headerRight = <FilterNoneIcon />;

function List(props) {
const [shops, setShops] = useState([]);

    useEffect(()=>{
        setShops(props.shops);
    },);
    console.log(shops);

    return (
        <div id="List">
            <Header
                headerTitle={headerTitle}
                headerLeft= {headerLeft}
                headerLeftPath={headerLeftPath}
                headerRight={headerRight}
            />
            <Shop shops={shops}/>
        </div>
    );
}
export default List;