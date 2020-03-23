import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from "../Context"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header() {
    const classes = useStyles();

    const { cartItems } = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      ECOMM  <MenuIcon />
                    </IconButton>
                    <Button color="inherit"><Link to="/">Home</Link></Button>
                    {
                        cartItems.length > 0 && <Button color="inherit"><Link to="/cart">Cart</Link></Button>
                    }
                    {
                        cartItems.length > 0 &&  <Button color="inherit"><Link to="/checkout">Checkout</Link></Button>
                    }
                    <Button color="inherit"><Link to="/signin">Login</Link></Button>

                </Toolbar>
            </AppBar>
        </div>
        // <header>
        //     <Link to="/">
        //         <i className="ri-home-line"></i>
        //     </Link>            
        //     <Link to="/cart">
        //         <i className={`${cartClassName} ri-fw ri-2x`}></i>
        //     </Link>
        //     <Link to="/checkout">
        //         Checkout
        //     </Link>
        //     <Link to="/signin">
        //         <i className="ri-login-box-fill"></i>
        //     </Link>
        // </header>
    )
}

export default Header
