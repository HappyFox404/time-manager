import axios from "axios";
import { RouteBuilder } from "../../../core/RouteBuilder";
import {getDataApiResponse, getResponseApi, isResponseError, isResponseSuccess} from "../../../core/ResponseHelper";
import {NavigateFunction} from "react-router-dom";
import {Dispatch} from "redux";
import UserStoreActions from "../../authorization/models/UserStoreActions";
import AppRoutes from "../../../core/AppRoutes";

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
    axios.post(RouteBuilder.CreateRoute(userRegisterMethod), {
            userName,
            password,
            email
        })
        .then((res : any) => {
            const response = getResponseApi<RegistrationResponse>(res.data);
            if(isResponseSuccess<RegistrationResponse>(response)){
                const responseData = getDataApiResponse<RegistrationResponse>(res.data);
                if(responseData !== null){
                    console.log(res);
                    dispatch({type: UserStoreActions.Authorize, data:{
                            token: responseData?.data?.token ?? '',
                            refreshToken: responseData?.data?.refreshToken ?? '',
                            isAuthorization: true
                        }});
                    navigate(AppRoutes.Base);
                }
            }
            if(isResponseError<RegistrationResponse>(response)){
                const responseData = getDataApiResponse<RegistrationResponse>(res.data);
                addError(responseData?.message ?? 'Произошла непредвиденная ошибка');
            }
         })
        .catch((err : any) => {
            console.log(err);
            addError('Произошла непредвиденная ошибка');
        });
}