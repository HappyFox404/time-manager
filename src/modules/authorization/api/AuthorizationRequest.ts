import axios from "axios";
import { RouteBuilder } from "../../../core/RouteBuilder";
import {NavigateFunction} from "react-router-dom";
import {Dispatch} from "redux";
import UserStoreActions from "../models/UserStoreActions";
import {ApiResponse} from "../../../core/ResponseHelper";
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
        const resposne = res.data as ApiResponse<AuthorizationResponse>;
        if(resposne.statusCode === 200){
            if(resposne.data !== null) {
                dispatch({type: UserStoreActions.Authorize, data:{
                        token: resposne.data?.token ?? '',
                        refreshToken: resposne.data?.refreshToken ?? '',
                        isAuthorization: true
                    }});
            }
        }
        if(resposne.statusCode === 400){
            addError(resposne?.message ?? 'Произошла непредвиденная ошибка');
        }
    })
    .catch((err : any) => {
        console.error(err);
        addError('Произошла непредвиденная ошибка');
    });
}