import React, { useState, useContext, useEffect } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import AppBar from '@material-ui/core/AppBar'

import { Link } from "react-router-dom";

//import classes from "*.module.sass";

function Cart() {
    const { checkoutFormItems, addCheckoutValues } = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const { cartItems, emptyCart } = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
    const items = {...checkoutFormItems}
    const [inputData, setInputData] = useState({
        step: 1,
        firstName:"",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: ""
    })

    const submitForm = () => {
        console.log(inputData)
        addCheckoutValues(inputData)
    }
    const handleTextFieldChange = (event) => {
        const { name, value } = event.target
        setInputData(prevInputValues => ({ ...prevInputValues, [name]: value }))
    }

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Cart</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                    <div className="order-button">
                        <button onClick={placeOrder}>{buttonText}</button>
                    </div> :
                    <p>You have no items in your cart.</p>
            }
        </main>

    )
}

export default Cart