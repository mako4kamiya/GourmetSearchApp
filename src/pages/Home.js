import { useEffect, useState } from "react";
import Map from "../components/Map";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import { makeStyles } from '@material-ui/core/styles';
import "../css/home.css";

const useStyles = makeStyles({
    AppBar: {
        color: '#000',
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    Toolbar: {
        justifyContent: 'space-between'
    },
});

function Home() {
    const classes = useStyles();
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const [position, setPosition] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((res) => {
            setLng(res.coords.longitude);
            setLat(res.coords.latitude);
            setPosition(true); //なぜかこれがないと綺麗に描画されない。
        });
    },[position]);

    return (
        <div id="Home">
            <AppBar className={classes.AppBar}>
                <Toolbar className={classes.Toolbar}>
                    <IconButton edge="start">
                        <FormatListBulletedIcon/>
                    </ IconButton>
                    <Typography>周辺の検索</Typography>
                    <IconButton edge="end">
                        <FilterNoneIcon />
                    </ IconButton>
                </Toolbar>
            </AppBar>
            <Map lng={lng} lat={lat}/>
        </div>
    );
}
export default Home;