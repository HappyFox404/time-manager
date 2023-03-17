import {ApiResponse, RequestApi} from "../../../core/ResponseHelper";
import {RouteBuilder} from "../../../../modules/request/models/RouteBuilder";
import Schedule from "../models/Schedule";

const scheduleAddMethod: string = 'schedule';

export function AddScheduleRequest(day: string,
                                   addError : (value : string) => void,
                                   success : (schedule: Schedule | null) => void) : void {

    const processing = (response : ApiResponse<Schedule>) => {
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

    RequestApi<any, Schedule>('post',
        RouteBuilder.CreateRoute(scheduleAddMethod),
        { day }, processing, error);
}