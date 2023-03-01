import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AuthorizationPage from "./pages/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage";
import BasePage from "./pages/BasePage";

function App() {
    return (
        <BrowserRouter>
                <div className="application-page columns">
                    <Routes>
                        <Route path={AppRoutes.Authorization} element={<AuthorizationPage />} />
                        <Route path={AppRoutes.Registration} element={<RegistrationPage />} />
                        <Route path={AppRoutes.Base} element={<BasePage />} />
                        <Route path="*" element={<Navigate to={AppRoutes.Base} replace />}/>
                    </Routes>
                </div>
            </BrowserRouter>
    );
}

export default App;
