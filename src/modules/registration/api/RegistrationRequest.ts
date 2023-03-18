import {LocalStorageToken, RequestApi, RouteBuilder} from "../../api";
import {ApiResponse} from "../../api/request/Request";
import {AppRequest} from "../../../constants/AppRequest";

export interface RegistrationResponse {
    token: string;
    refreshToken: string;
}

export function RegistrationRequest(userName: string,
                                     password: string,
                                     email: string,
                                     resolve : any,
                                     reject : any) : void {

    const processing = (response : ApiResponse<RegistrationResponse>) => {
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

    RequestApi<any, RegistrationResponse>('post',
        RouteBuilder.CreateRoute(AppRequest.Registration),
        { userName, password, email }, processing, error);
}