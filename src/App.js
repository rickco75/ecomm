import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Cart2 from "./pages/Cart2"
import Photos from "./pages/Photos"
import SignIn from "./pages/SignIn"
import Checkout from "./components/Checkout/Checkout"
import PaymentForm from './components/Checkout/PaymentForm'

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>                
                <Route path="/cart">
                    <Cart2 />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/checkout">
                    <Cart />
                </Route>
                <Route path="/paymentdetails">
                    <PaymentForm />
                </Route>
            </Switch>
        </div>
    )
}

export default App