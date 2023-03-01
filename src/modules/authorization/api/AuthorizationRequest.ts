import axios from "axios";
import { RouteBuilder } from "../../../core/RouteBuilder";
import {useDispatch} from "react-redux";
import IUserState from "../models/IUserState";
import {NavigateFunction} from "react-router-dom";
import {AnyAction, Dispatch} from "redux";
import {getDataApiResponse, getResponseApi, isResponseError, isResponseSuccess} from "../../../core/ResponseHelper";
import AppRoutes from "../../../core/AppRoutes";
import UserStoreActions from "../models/UserStoreActions";
const userLoginMethod: string = 'user/authorization';

export interface AuthorizationResponse {
    token: string;
    refreshToken: string;
}

export function AuthorizationRequest(userName: string,
                                     password: string,
                                     navigate : NavigateFunction,
                                     dispatch : Dispatch) {
    axios.get(RouteBuilder.CreateRoute(userLoginMethod), {
        params: {
            userName,
            password
        }
    }).then((res : any) => {
        const resposne = getResponseApi<AuthorizationResponse>(res.data);
        if(isResponseSuccess<AuthorizationResponse>(resposne)){
            const responseData = getDataApiResponse<AuthorizationResponse>(res.data);
            if(responseData !== null) {
                dispatch({type: UserStoreActions.Authorize, data:{
                        token: responseData?.data?.token ?? '',
                        refreshToken: responseData?.data?.refreshToken ?? '',
                        isAuthorization: true
                    }});
                navigate(AppRoutes.Base);
            }
        }
        if(isResponseError<AuthorizationResponse>(resposne)){
            const responseData = getDataApiResponse<AuthorizationResponse>(res.data);
            //setValidationError(responseData?.message ?? 'Непредвиденная ошибка');
        }
    })
    .catch((err : any) => console.error(err));
}