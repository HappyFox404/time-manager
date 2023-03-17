import {RouteItem} from "../models/RouteItem";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export interface IRouteMapProvider {
    routes: RouteItem[];
}

export function RouteMapProvider({routes} : IRouteMapProvider) : JSX.Element {
    function RouteElement(route : RouteItem, index : number) : JSX.Element {
        if(route.condition){
            if(route.condition.condition() === false){
                return <Route key={index} path={route.path} element={route.element}/>;
            } else {
                return <Route key={index} path={route.path} element={route.condition.element}/>;
            }
        } else {
            return <Route key={index} path={route.path} element={route.element}/>;
        }
    }

    return <BrowserRouter>
        <Routes>
            { routes.map((item, index) => RouteElement(item, index)) }
        </Routes>
    </BrowserRouter>;
}