import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import SignIn from "./pages/SignIn"
import Checkout from "./components/Checkout/Checkout"
function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>                
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>                
            </Switch>
        </div>
    )
}

export default App