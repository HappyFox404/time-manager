import {RouteItem} from "../modules/routes/models/RouteItem";
import MainPage from "../pages/MainPage";
import {AppRoutes} from "../constants/AppRoutes";
import {LocalStorageToken} from "../modules/api";
import AuthorizationPage from "../pages/AuthorizationPage";
import RegistrationPage from "../pages/RegistrationPage";

const ApplicationRouteMap : RouteItem[] = [
    {
        element : <MainPage/>,
        path: AppRoutes.Main,
        condition: {
            condition: () => {
                const tokenProvider = new LocalStorageToken();
                return (tokenProvider.GetStorage()?.isAuthorization ?? false) === false;
            },
            element: <AuthorizationPage/>
        }
    },
    {
        element : <AuthorizationPage/>,
        path: AppRoutes.Authorization,
        condition: {
            condition: () => {
                const tokenProvider = new LocalStorageToken();
                return (tokenProvider.GetStorage()?.isAuthorization ?? false) === true;
            },
            element: <MainPage/>
        }
    },
    {
        element : <RegistrationPage/>,
        path: AppRoutes.Registration,
        condition: {
            condition: () => {
                const tokenProvider = new LocalStorageToken();
                return (tokenProvider.GetStorage()?.isAuthorization ?? false) === true;
            },
            element: <MainPage/>
        }
    },
    {
        element : <MainPage/>,
        path: '*',
        condition: {
            condition: () => {
                const tokenProvider = new LocalStorageToken();
                return (tokenProvider.GetStorage()?.isAuthorization ?? false) === false;
            },
            element: <AuthorizationPage/>
        }
    }
];

export { ApplicationRouteMap }