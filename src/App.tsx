import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./core/AppRoutes";
import AuthorizationPage from "./pages/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage";
import BasePage from "./pages/BasePage";
import {Provider} from "react-redux";
import {AuthorizationRouter, userStore} from "./modules/authorization";

function App() {
    return (
        <Provider store={userStore}>
            <BrowserRouter>
                <div className="application-page columns">
                    <AuthorizationRouter/>
                    <Routes>
                        <Route path={AppRoutes.Authorization} element={<AuthorizationPage />} />
                        <Route path={AppRoutes.Registration} element={<RegistrationPage />} />
                        <Route path={AppRoutes.Base} element={<BasePage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}
//<Route path="*" element={<Navigate to={AppRoutes.Base} replace />}/>
export default App;
