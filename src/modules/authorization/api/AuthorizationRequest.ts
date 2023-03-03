import axios from "axios";
import { RouteBuilder } from "../../../core/RouteBuilder";
import {NavigateFunction} from "react-router-dom";
import {Dispatch} from "redux";
import {getDataApiResponse, getResponseApi, isResponseError, isResponseSuccess} from "../../../core/ResponseHelper";
import UserStoreActions from "../models/UserStoreActions";
const userLoginMethod: string = 'user/authorization';

export interface AuthorizationResponse {
    token: string;
    refreshToken: string;
}

export function AuthorizationRequest(userName: string,
                                     password: string,
                                     navigate : NavigateFunction,
                                     dispatch : Dispatch,
                                     addError : (value : string) => void) : void {
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
            }
        }
        if(isResponseError<AuthorizationResponse>(resposne)){
            const responseData = getDataApiResponse<AuthorizationResponse>(res.data);
            addError(responseData?.message ?? 'Произошла непредвиденная ошибка');
        }
    })
    .catch((err : any) => {
        console.error(err);
        addError('Произошла непредвиденная ошибка');
    });
}