import React from 'react'
import {RouteMapProvider} from "./modules/routes";
import {ApplicationRouteMap} from "./models/ApplicationRouteMap";
import {RouteBuilder} from "./modules/api";

RouteBuilder.ApiAdress = 'http://localhost:7000/api/';

function App() {
    return <RouteMapProvider routes={ApplicationRouteMap}/>;
}
export default App;
