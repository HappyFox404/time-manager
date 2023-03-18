import {LocalStorageToken, RequestApi, RequestApiWithAuthentication, RouteBuilder} from "../../api";
import {ApiResponse} from "../../api/request/Request";
import {AppRequest} from "../../../constants/AppRequest";
import {Schedule} from "../models/Schedule";

export function GetSchedulesRequest(count : number = 100,
                                    resolve : any,
                                     reject: any) : void {

    const processing = (response : ApiResponse<Schedule[]>) => {
        if(response.statusCode === 200){
            if(response.data !== null) {
                resolve(response.data);
            }
        }
        if(response.statusCode === 400){
            reject(response?.message ?? 'Произошла непредвиденная ошибка');
        }
    }
    const error = (ex: any) => { reject('Произошла непредвиденная ошибка'); };

    RequestApiWithAuthentication<any, Schedule[]>('get',
        RouteBuilder.CreateRoute(AppRequest.Schedule),
        { count }, processing, error);
}