import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
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
                    <Link to={props.headerLeftPath}>
                        <IconButton edge="start">
                            {props.headerLeft}
                        </ IconButton>
                    </Link>
                    <Typography>{props.headerTitle}</Typography>
                    <Link to="/filter">
                        <IconButton edge="end">
                            {props.headerRight}
                        </ IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </header>
    );
}
export default Header;