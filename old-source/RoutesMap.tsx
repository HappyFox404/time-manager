import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppRoutes from "../src/constants/AppRoutes";
import AuthorizationPage from "./pages/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage";
import BasePage from "./pages/BasePage";
import {Provider, useSelector} from "react-redux";
import {AuthorizationLogout, userStore} from "./modules/authorization";
import {DefaultComponent} from "./modules/main/components/DefaultComponent";
import IUserState from "./modules/authorization/models/IUserState";
import {SchedulesPage} from "./modules/schedules";

interface RouteMapItem {
    path: string;
    element: JSX.Element;
    isNeedAuthorize: boolean;
    isNoWorkAuthorize?:boolean;
}

function RoutesMap() : JSX.Element {
    const tokenData = useSelector((state : IUserState) => state.tokenData);

    const defaultMap : () => JSX.Element = () => {
        if(tokenData?.isAuthorization && tokenData?.isAuthorization === true){
            return <Navigate to={AppRoutes.Base} replace={true} />;
        }
        return <Navigate to={AppRoutes.Authorization} replace={true} />;
    }
    const authorizationMap : () => JSX.Element = () => <Navigate to={AppRoutes.Authorization} replace={true} />;
    const noWorkAuthorizationMap : () => JSX.Element = () => <Navigate to={AppRoutes.Base} replace={true} />;

    const routeMaps : RouteMapItem[] = [
        {path: AppRoutes.Authorization, isNeedAuthorize: false, isNoWorkAuthorize: true, element: <AuthorizationPage/>},
        {path: AppRoutes.Registration, isNeedAuthorize: false, isNoWorkAuthorize: true, element: <RegistrationPage />},
        {path: AppRoutes.Base, isNeedAuthorize: true, element: <BasePage element={<DefaultComponent/>}/>},
        {path: AppRoutes.Base+AppRoutes.Logout, isNeedAuthorize: true, element: <BasePage element={<AuthorizationLogout/>}/>},
        {path: AppRoutes.Base+AppRoutes.ScheduleView, isNeedAuthorize: true, element: <BasePage element={<SchedulesPage />}/>},
    ]

    return (
        <BrowserRouter>
            <div className="columns">
                <Routes>
                    {routeMaps.length > 0 && routeMaps.map((item, idx) => {
                        if(item.isNeedAuthorize === true){
                            if(tokenData?.isAuthorization && tokenData?.isAuthorization === true) {
                                return <Route key={idx.toString()} path={item.path} element={item.element}/>
                            } else {
                                return <Route key={idx.toString()} path={item.path} element={authorizationMap()}/>;
                            }
                        } else if(item.isNeedAuthorize === false && item.isNoWorkAuthorize && item.isNoWorkAuthorize === true){
                            if(tokenData?.isAuthorization === false) {
                                return <Route key={idx.toString()} path={item.path} element={item.element}/>
                            } else {
                                return <Route key={idx.toString()} path={item.path} element={noWorkAuthorizationMap()}/>;
                            }
                        } else {
                            return <Route key={idx.toString()} path={item.path} element={item.element}/>
                        }
                    })}
                    <Route path="*" element={defaultMap()}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
//<Route path="*" element={<Navigate to={AppRoutes.Base} replace />}/>
export default RoutesMap;
