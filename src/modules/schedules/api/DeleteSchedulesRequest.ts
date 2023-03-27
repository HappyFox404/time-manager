import {LocalStorageToken, RequestApi, RequestApiWithAuthentication, RouteBuilder} from "../../api";
import {ApiResponse} from "../../api/request/Request";
import {AppRequest} from "../../../constants/AppRequest";
import {Schedule} from "../models/Schedule";

export function DeleteSchedulesRequest(id: string,
                                    resolve : any,
                                     reject: any) : void {

    const processing = (response : ApiResponse<Schedule[]>) => {
        if(response.statusCode === 200){
            resolve();
        }
        if(response.statusCode === 400){
            reject(response?.message ?? 'Произошла непредвиденная ошибка');
        }
    }
    const error = (ex: any) => { reject('Произошла непредвиденная ошибка'); };

    RequestApiWithAuthentication<any, Schedule[]>('delete',
        RouteBuilder.CreateRoute(AppRequest.Schedule),
        { id }, processing, error);
}