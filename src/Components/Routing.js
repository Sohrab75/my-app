import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Details from "./Details/Details";
import Footer from "./Footer";
import Home from "./Home/Home";
import Listing from "./Listing/Listing";
import PlaceOrder from "./Orders/PlaceOrder";

const Routing =()=>{
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:categoryId" component={Listing}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/placeOrder/:id" component={PlaceOrder}/>
            
        </BrowserRouter>
    )

}

export default Routing;