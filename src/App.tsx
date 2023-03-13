import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {userStore} from "./modules/authorization";
import RoutesMap from "./RoutesMap";


function App() {
    return (
        <Provider store={userStore}>
            <RoutesMap/>
        </Provider>
    );
}
export default App;
