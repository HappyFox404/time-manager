import {LocalStorageToken, RequestApi, RouteBuilder} from "../../api";
import {ApiResponse} from "../../api/request/Request";
import {NavigateFunction} from "react-router-dom";
import {AppRoutes} from "../../../constants/AppRoutes";
import {AppRequest} from "../../../constants/AppRequest";

export interface AuthorizationResponse {
    token: string;
    refreshToken: string;
}

export function AuthorizationRequest(userName: string,
                                     password: string,
                                     messageError : (value : string) => void) : void {

    const processing = (response : ApiResponse<AuthorizationResponse>) => {
        if(response.statusCode === 200){
            if(response.data !== null) {
                const token = new LocalStorageToken();
                token.SaveStorage({
                    token: response.data?.token ?? '',
                    refreshToken: response.data?.refreshToken ?? '',
                    isAuthorization: true
                });
                window.location.reload();
            }
        }
        if(response.statusCode === 400){
            messageError(response?.message ?? 'Произошла непредвиденная ошибка');
        }
    }
    const error = (ex: any) => { messageError('Произошла непредвиденная ошибка'); };

    RequestApi<any, AuthorizationResponse>('get',
        RouteBuilder.CreateRoute(AppRequest.Authorization),
        { userName, password }, processing, error);
}