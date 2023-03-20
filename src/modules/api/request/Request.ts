import axios, {AxiosError} from "axios";
import {RouteBuilder} from "./RouteBuilder";
import {LocalStorageToken} from "../authentication/LocalTokenStorage";

const apiRefreshMethod = 'user/refresh';

export interface ApiResponse<T> {
    message: string | null;
    statusCode: number;
    data: T | null
}

interface AuthenticationResponse {
    token: string;
    refreshToken: string;
}

export function RequestApiWithAuthentication<TParameters,TResponseData>(method : string,
                                                      url: string,
                                                      params : TParameters | null,
                                                      processing : (data: ApiResponse<TResponseData>) => void,
                                                      error: (err: any) => void,
                                                      trying : boolean = false){
    const tokenData = new LocalStorageToken().GetStorage();
    const clearAuthorization = () => {
        new LocalStorageToken().ClearStorage();
    };
    const processingAuth = (response : ApiResponse<AuthenticationResponse>) => {
        if(response.statusCode === 200){
            if(response.data !== null) {
                new LocalStorageToken().SaveStorage({
                    token: response.data?.token ?? '',
                    refreshToken: response.data?.refreshToken ?? '',
                    isAuthorization: true
                });
                RequestApiWithAuthentication<TParameters,TResponseData>(method,url,params,processing,error, true);
            }
        }
        if(response.statusCode === 400){
            clearAuthorization();
            window.location.reload();
        }
    }
    const errorAuth = (ex: any) => {  };

    axios({
        method: method,
        url: url,
        data: (method !== 'get' && method !== 'delete') ? params : null,
        params: (method === 'get' || method === 'delete') ? params : null,
        headers: {
            Authorization: 'Bearer ' + tokenData?.token
        }
    }).then((res : any) => {
        const response = res.data as ApiResponse<TResponseData>;
        if(processing) {
            processing(response);
        }
    }).catch((ex : any) => {
        if(ex instanceof AxiosError){
            if(ex?.response?.status === 401 && trying === false){
                RequestApiWithAuthentication<any, AuthenticationResponse>('get',
                    RouteBuilder.CreateRoute(apiRefreshMethod),
                    { refreshToken: tokenData?.refreshToken }, processingAuth, errorAuth);
            } else if(ex?.response?.status === 401 && trying === true){
                clearAuthorization();
                window.location.reload();
            } else {
                if(error){
                    error(ex);
                }
            }
        } else {
            if(error){
                error(ex);
            }
        }
    });
}

export function RequestApi<TParameters,TResponseData>(method : string,
                                                                        url: string,
                                                                        params : TParameters | null,
                                                                        processing : (data: ApiResponse<TResponseData>) => void,
                                                                        error: (err: any) => void){
    axios({
        method: method,
        url: url,
        data: (method !== 'get' && method !== 'delete') ? params : null,
        params: (method === 'get' || method === 'delete') ? params : null,
    }).then((res : any) => {
        const response = res.data as ApiResponse<TResponseData>;
        if(processing) {
            processing(response);
        }
    }).catch((ex : any) => {
        if(error){
            error(ex);
        }
    });
}