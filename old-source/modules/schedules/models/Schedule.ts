import {ResponseCommonData} from "../../../core/ResponseHelper";

export default interface Schedule extends ResponseCommonData {
    day: string;
    userId:string;
}