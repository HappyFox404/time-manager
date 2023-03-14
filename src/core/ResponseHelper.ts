import axios, {AxiosError} from "axios";
import TokenLocalStorage from "./token/LocalTokenStorage";
import {RouteBuilder} from "./RouteBuilder";

const apiRefreshMethod = 'user/refresh';

export interface ApiResponse<T> {
    message: string | null;
    statusCode: number;
    data: T | null
}

export interface ResponseCommonData {
    id: string;
    dateCreated:string;
}

interface AuthorizationResponse {
    token: string;
    refreshToken: string;
}

export function RequestApi<TParameters,TResponseData>(method : string,
                                                   url: string,
                                                   params : TParameters | null,
                                                   processing : (data: ApiResponse<TResponseData>) => void,
                                                   error: (err: any) => void,
                                                   trying : boolean = false){
    const tokenData = new TokenLocalStorage().getStorage();
    const clearAuthorization = () => {
        new TokenLocalStorage().saveStorage({
            token: '',
            refreshToken: '',
            isAuthorization: false
        });
    };

    const processingAuth = (response : ApiResponse<AuthorizationResponse>) => {
        if(response.statusCode === 200){
            if(response.data !== null) {
                new TokenLocalStorage().saveStorage({
                    token: response.data?.token ?? '',
                    refreshToken: response.data?.refreshToken ?? '',
                    isAuthorization: true
                });
                RequestApi<TParameters,TResponseData>(method,url,params,processing,error, true);
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
        data: (method !== 'get') ? params : null,
        params: (method === 'get') ? params : null,
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
                RequestApi<any, AuthorizationResponse>('get',
                    RouteBuilder.CreateRoute(apiRefreshMethod),
                    { refreshToken: tokenData?.refreshToken }, processingAuth, errorAuth);
            } else if(ex?.response?.status === 401 && trying === true){
                clearAuthorization();
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