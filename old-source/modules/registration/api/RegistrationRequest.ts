import axios from "axios";
import { RouteBuilder } from "../../../../modules/request/models/RouteBuilder";
import {NavigateFunction} from "react-router-dom";
import {Dispatch} from "redux";
import UserStoreActions from "../../authorization/models/UserStoreActions";
import AppRoutes from "../../../../src/constants/AppRoutes";
import {ApiResponse, RequestApi} from "../../../core/ResponseHelper";

const userRegisterMethod : string = 'user/register';

export interface RegistrationResponse{
    token: string;
    refreshToken: string;
}

export function RegistrationRequest(userName: string,
                                    password: string,
                                    email: string,
                                    navigate : NavigateFunction,
                                    dispatch : Dispatch,
                                    addError : (value : string) => void){
    const processing = (response : ApiResponse<RegistrationResponse>) => {
        if(response.statusCode === 200){
            if(response.data !== null){
                dispatch({type: UserStoreActions.Authorize, data:{
                        token: response.data?.token ?? '',
                        refreshToken: response.data?.refreshToken ?? '',
                        isAuthorization: true
                    }});
                navigate(AppRoutes.Base);
            }
        }
        if(response.statusCode === 400){
            addError(response?.message ?? 'Произошла непредвиденная ошибка');
        }
    }
    const error = (ex: any) => { addError('Произошла непредвиденная ошибка'); };

    RequestApi<any, RegistrationResponse>('post',
        RouteBuilder.CreateRoute(userRegisterMethod),
        { userName, password, email }, processing, error);
}