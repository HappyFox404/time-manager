import axios from "axios";
import { RouteBuilder } from "../../../RouteBuilder";

const userLoginMethod : string = 'user/registration';

export interface RegistrationResponse{
    token: string;
    refreshToken: string;
}

export function RegistrationRequest(userName: string, password: string, email: string){
    /*axios.post(RouteBuilder.route(ApiRoutes.UserRegistration), {
            userName,
            password,
            email
        })
        .then((res : any) => {
            const response = getResponseApi<RegistrationResponse>(res.data);
            if(isResponseSuccess<RegistrationResponse>(response)){
                const responseData = getDataApiResponse<RegistrationResponse>(res.data);
                if(responseData !== null){
                    dispatch({type: ApplicationStateActions.Authorize, tokenData:{
                            token: responseData?.data?.token ?? '',
                            refreshToken: responseData?.data?.refreshToken ?? '',
                            isAuthorization: true
                        }});
                    navigate(ApplicationRoutes.Base);
                }
            }
            if(isResponseError<RegistrationResponse>(response)){
                const responseData = getDataApiResponse<RegistrationResponse>(res.data);
                setValidationError(responseData?.message ?? 'Непредвиденная ошибка');
            }
         })
        .catch((err : any) => { console.log(err); });*/
}