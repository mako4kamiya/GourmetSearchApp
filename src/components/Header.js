import Home from "../pages/Home";
import List from "../pages/List";
import Filter from "../pages/Filter";

import { Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FilterNoneIcon from '@material-ui/icons/FilterNone';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    AppBar: {
        color: '#000',
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    Toolbar: {
        justifyContent: 'space-between'
    },
});

function Header(props) {
    const classes = useStyles();
    return (
        <header>
            <AppBar className={classes.AppBar}>
                <Toolbar className={classes.Toolbar}>
                    <Link to="/list">
                        <IconButton edge="start">
                            <FormatListBulletedIcon/>
                        </ IconButton>
                    </Link>
                    <Typography>周辺の検索</Typography>
                    <Link to="/filter">
                        <IconButton edge="end">
                            <FilterNoneIcon />
                        </ IconButton>
                    </Link>
                </Toolbar>
            </AppBar>

            {/* <Switch>
                <Route path="/list">
                    <List />
                </Route>
                <Route path="/filter">
                    <Filter />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch> */}
        </header>
    );
}
export default Header;