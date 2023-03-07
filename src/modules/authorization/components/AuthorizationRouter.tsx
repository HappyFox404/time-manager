import {useSelector} from "react-redux";
import AppRoutes from "../../../core/AppRoutes";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import IUserState from "../models/IUserState";
import ITokenData from "../models/ITokenData";
import {useEffect} from "react";
import appRoutes from "../../../core/AppRoutes";

export function AuthorizationRouter(): JSX.Element {
    const tokenData = useSelector((state : IUserState) => state.tokenData);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        routeUser();
    }, [tokenData]);

    /*
    * В будущем добавить проверку на время, если время жизни токена более 10 мин, то запрашивать авторизацию с сервера
    */

    const routeUser : () => void = () => {
        let isAuthorization = false;

        if(tokenData !== null) {
            isAuthorization = tokenData.isAuthorization;
        }
        //debugger;
        if(isAuthorization == false && (location.pathname !== AppRoutes.Authorization && location.pathname !== AppRoutes.Registration)) {
            navigate(AppRoutes.Authorization);
        } else if(isAuthorization === true && (location.pathname === AppRoutes.Authorization || location.pathname === AppRoutes.Registration)) {
            navigate(AppRoutes.Base);
        } else if(isAuthorization === false && location.pathname === ''){
            navigate(AppRoutes.Authorization);
        }
    };
    return (
        <div className="is-hidden"></div>
    )
}
