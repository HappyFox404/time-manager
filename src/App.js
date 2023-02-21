import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authorization from "./pages/Authorization.tsx";
import Registration from "./pages/Registration.tsx";
import Main from "./pages/Main.tsx";
import ApplicationRoutes from "./core/Route.ts";


export default function App() {
    return (
        <BrowserRouter>
            <div className="application-page columns">
                <Routes>
                    <Route path={ApplicationRoutes.Application} element={<Main/>}/>
                    <Route path={ApplicationRoutes.Authorization} element={<Authorization/>}/>
                    <Route path={ApplicationRoutes.Registration} element={<Registration/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};
