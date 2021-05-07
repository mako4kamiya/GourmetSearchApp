import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
  root: {
    maxWidth: 345,
  },
  SwipeDiv: {
    // width: "90% !important",
  },
});

function Shop(props) {
  const rootVh =props.rootVh
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (shop) => {
    setActiveStep(shop);
  };

  return (
    <div id="shop">
      <div className="card">
        <SwipeableViews index={activeStep} onChangeIndex={handleStepChange} style slideClassName={classes.SwipeDiv}>
          {shops.map((shop, index) => (
            <div key={shop.label}>
              {/* {Math.abs(activeStep - index) <= 2 ? (
                <img src={shop.imgPath} alt={shop.label} />
              ) : null} */}
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={shop.imgPath}
                    title="Contemplative Reptile"
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
    </div>
  );
}

export default Shop;