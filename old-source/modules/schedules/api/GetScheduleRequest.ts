import {ApiResponse, RequestApi} from "../../../core/ResponseHelper";
import {RouteBuilder} from "../../../../modules/request/models/RouteBuilder";
import Schedule from "../models/Schedule";

const scheduleAddMethod: string = 'schedule';

export function GetScheduleRequest(addError : (value : string) => void,
                                   success : (schedules:Schedule[] | null) => void) : void {

    const processing = (response : ApiResponse<Schedule[]>) : void => {
        if(response.statusCode === 200){
            if(response.data !== null) {
                success(response.data);
            }
        }
        if(response.statusCode === 400){
            addError(response?.message ?? 'Произошла непредвиденная ошибка');
        }
    }
    const error = (ex: any) => { addError('Произошла непредвиденная ошибка'); };

    RequestApi<any, Schedule[]>('get',
        RouteBuilder.CreateRoute(scheduleAddMethod),null, processing, error);
}