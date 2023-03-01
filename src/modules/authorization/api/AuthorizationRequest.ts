import axios from "axios";
import { RouteBuilder } from "../../../RouteBuilder";

const userLoginMethod : string = 'user/authorization';

export interface AuthorizationResponse {
    token: string;
    refreshToken: string;
}

export function AuthorizationRequest(userName: string, password: string){
    axios.get(RouteBuilder.CreateRoute(userLoginMethod), {
        params: {
            userName,
            password
        }
    })
    /*.then((res : any) => {
        const resposne = getResponseApi<AuthorizationResponse>(res.data);
        if(isResponseSuccess<AuthorizationResponse>(resposne)){
            const responseData = getDataApiResponse<AuthorizationResponse>(res.data);
            if(responseData !== null) {
                dispatch({type: ApplicationStateActions.Authorize, tokenData:{
                        token: responseData?.data?.token ?? '',
                        refreshToken: responseData?.data?.refreshToken ?? '',
                        isAuthorization: true
                    }});
                navigate(ApplicationRoutes.Base);
            }
        }
        if(isResponseError<AuthorizationResponse>(resposne)){
            const responseData = getDataApiResponse<AuthorizationResponse>(res.data);
            setValidationError(responseData?.message ?? 'Непредвиденная ошибка');
        }
    })
    .catch((err : any) => console.log(err));*/
}