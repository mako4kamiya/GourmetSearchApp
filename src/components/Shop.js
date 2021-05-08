import { useEffect, useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import "../css/shop.css";

function Shop(props) {
  const [shops, setShops] = useState([]);
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

  useEffect(()=>{
    setShops(props.shops);
  },);
  console.log(shops);

  return (
    <div id="Shop">
      <SwipeableViews className="swipe">
        {shopComponents}
      </SwipeableViews>
    </div>
  );
}
export default Shop;