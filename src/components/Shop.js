import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    padding: '0 30px',
  },
  slideContainer: {
    padding: '0 10px',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  bgColor: {
    backgroundColor: '#FEA900',
  },
};

function Shop(props) {
  const [shops, setShops] = useState([]);

  useEffect(()=>{
    setShops(props.shops);
    console.log(shops);
  },[props]);


  // const [id, setId] = useState(props.id);
  // const [address, setAddress] = useState(props.address);
  // const [photo, setPhoto] = useState(props.photo);
  // const [logoImg, setLgoImg] = useState(props.logoImg);
  // const [open, setOpen] = useState(props.open);
  // const [close, setClose] = useState(props.close);
  // const [creditCard, setCreditCard] = useState(props.creditCard);
  // const [urls, setUrls] = useState(props.urls);
  // const [parking, setParking] = useState(props.parking);
  // const [child, setChild] = useState(props.child);
  // const [privateRoom, setPrivateRoom] = useState(props.privateRoom);

  return (
    <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
      <div style={Object.assign({}, styles.slide, styles.baColor)}>slide n°1</div>
      <div style={Object.assign({}, styles.slide, styles.baColor)}>slide n°2</div>
      <div style={Object.assign({}, styles.slide, styles.baColor)}>slide n°3</div>
    </SwipeableViews>
  );
}
export default Shop;