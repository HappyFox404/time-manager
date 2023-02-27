import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import ApplicationRoutes from "./core/ApplicationRoutes";
import React from "react";
import TokenLocalStorage from "./core/TokenLocalStorage";
import {legacy_createStore as createStore} from 'redux'
import ApplicationStateActions, {IApplicationState} from "./core/interfaces/IApplicationState";
import ITokenData from "./core/interfaces/ITokenData";
import {Provider} from "react-redux";
import reducer from "./core/Reducer";

const store = createStore(reducer)

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="application-page columns">
                    <Routes>
                        <Route path={ApplicationRoutes.Base} element={<Base />} />
                        <Route path={ApplicationRoutes.Authorization} element={<Authorization />} />
                        <Route path={ApplicationRoutes.Registration} element={<Registration />} />
                        <Route path="*" element={<Navigate to={ApplicationRoutes.Base} replace />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
