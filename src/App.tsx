import React from 'react'
import {RouteMapProvider} from "./modules/routes";
import {ApplicationRouteMap} from "./models/ApplicationRouteMap";
import {RouteBuilder} from "./modules/api";
import {Provider} from "react-redux";
import ConfigureStore from "./store/ConfigureStore";

RouteBuilder.ApiAdress = 'http://localhost:7000/api/';

function App() {
    return <Provider store={ConfigureStore}>
        <RouteMapProvider routes={ApplicationRouteMap}/>
    </Provider>;
}
export default App;
