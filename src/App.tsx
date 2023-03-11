import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppRoutes from "./core/AppRoutes";
import AuthorizationPage from "./pages/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage";
import BasePage from "./pages/BasePage";
import {Provider} from "react-redux";
import {AuthorizationRouter, userStore} from "./modules/authorization";
import {DefaultComponent} from "./modules/main/components/DefaultComponent";
import {AddSchedule} from "./modules/main/components/AddSchedule";
function App() {
    return (
        <Provider store={userStore}>
            <BrowserRouter>
                <AuthorizationRouter/>
                <div className="application-page columns">
                    <Routes>
                        <Route path={AppRoutes.Authorization} element={<AuthorizationPage />}></Route>
                        <Route path={AppRoutes.Registration} element={<RegistrationPage />}></Route>
                        <Route path={AppRoutes.Base} element={<BasePage element={<DefaultComponent/>}/>}/>
                        <Route path={AppRoutes.Base+AppRoutes.Logout} element={<BasePage element={<div>Выход</div>}/>} />
                        <Route path={AppRoutes.Base+AppRoutes.ScheduleView} element={<BasePage element={<div>Просмотр</div>}/>} />
                        <Route path={AppRoutes.Base+AppRoutes.ScheduleAdd} element={<BasePage element={<AddSchedule/>}/>} />
                        <Route path="*" element={<Navigate to={AppRoutes.Base} replace={true} />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}
//<Route path="*" element={<Navigate to={AppRoutes.Base} replace />}/>
export default App;
