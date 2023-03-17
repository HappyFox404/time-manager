import axios from "axios";
import { RouteBuilder } from "../../../../modules/request/models/RouteBuilder";
import {NavigateFunction} from "react-router-dom";
import {Dispatch} from "redux";
import UserStoreActions from "../models/UserStoreActions";
import {ApiResponse, RequestApi} from "../../../core/ResponseHelper";
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

    const processing = (response : ApiResponse<AuthorizationResponse>) => {
        if(response.statusCode === 200){
            if(response.data !== null) {
                dispatch({type: UserStoreActions.Authorize, data:{
                        token: response.data?.token ?? '',
                        refreshToken: response.data?.refreshToken ?? '',
                        isAuthorization: true
                    }});
            }
        }
        if(response.statusCode === 400){
            addError(response?.message ?? 'Произошла непредвиденная ошибка');
        }
    }
    const error = (ex: any) => { addError('Произошла непредвиденная ошибка'); };

    RequestApi<any, AuthorizationResponse>('get',
        RouteBuilder.CreateRoute(userLoginMethod),
        { userName, password }, processing, error);
}