import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const shops = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  cardMedia: {
    potision: "static",
  },
});

function Shop(props) {
  const [lng, setLng] = useState(props.lng);
  const [lat, setLat] = useState(props.lat);

  useEffect(() => {
    axios.get(`/gourmet/v1/?key=4c8ae073fc977810&lat=${props.lat}&lng=${props.lng}&format=json`)
    .then((res)=>{
      console.log(res);
      });
  }, [lng, lat, props]);


  const classes = useStyles();

  return (
    <div id="Shop">
      <SwipeableViews>
        {shops.map((shop) => (
          <div key={shop.label}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={shop.imgPath}
                  title="Contemplative Reptile"
                  className={classes.cardMedia}
                />
                <CardContent>
                  <Typography>{shop.label}</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {shop.label}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
}
export default Shop;