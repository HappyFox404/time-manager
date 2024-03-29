import {LocalStorageToken, RequestApi, RouteBuilder} from "../../api";
import {ApiResponse} from "../../api/request/Request";
import {AppRequest} from "../../../constants/AppRequest";

export interface AuthorizationResponse {
    token: string;
    refreshToken: string;
}

export function AuthorizationRequest(userName: string,
                                     password: string,
                                     resolve : any,
                                     reject: any) : void {

    const processing = (response : ApiResponse<AuthorizationResponse>) => {
        if(response.statusCode === 200){
            if(response.data !== null) {
                const token = new LocalStorageToken();
                token.SaveStorage({
                    token: response.data?.token ?? '',
                    refreshToken: response.data?.refreshToken ?? '',
                    isAuthorization: true
                });
                resolve();
            }
        }
        if(response.statusCode === 400){
            reject(response?.message ?? 'Произошла непредвиденная ошибка');
        }
    }
    const error = (ex: any) => { reject('Произошла непредвиденная ошибка'); };

    RequestApi<any, AuthorizationResponse>('get',
        RouteBuilder.CreateRoute(AppRequest.Authorization),
        { userName, password }, processing, error);
}