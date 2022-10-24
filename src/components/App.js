import React from "react";

import { Route, Router, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";





function App() {

    return (

        <
        >
        <
        NavBar / >
        <
        Switch >
        <
        Route exact path = "/" > < Home / > < /Route> <
        Route path = "/Actors" > < Actors / > < /Route> <
        Route path = "/Directors" > < Directors / > < /Route> <
        Route path = "/Movies" > < Movies / > < /Route>

        <
        /Switch> <
        />

    )
}


export default App;