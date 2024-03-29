import {RouteItem} from "../modules/routes/models/RouteItem";
import SchedulesPage from "../pages/SchedulesPage";
import {AppRoutes} from "../constants/AppRoutes";
import {LocalStorageToken} from "../modules/api";
import AuthorizationPage from "../pages/AuthorizationPage";
import RegistrationPage from "../pages/RegistrationPage";

const ApplicationRouteMap : RouteItem[] = [
    {
        element : <SchedulesPage/>,
        path: AppRoutes.Schedules,
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
            element: <SchedulesPage/>
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
            element: <SchedulesPage/>
        }
    },
    {
        element : <SchedulesPage/>,
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