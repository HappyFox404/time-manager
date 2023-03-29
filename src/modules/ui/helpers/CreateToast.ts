import {toast} from "bulma-toast";
import {BaseElementColor} from "../models/Colors";

export enum ToastPositionType {
    TR = "top-right",
    TL = "top-left",
    TC = "top-center",
    C = "center",
    BR = "bottom-right",
    BL = "bottom-left",
    BC = "bottom-center"
}

export interface ICreateToastData {
    color: BaseElementColor;
    message: string;
    position?: ToastPositionType;
}

export function CreateToast({message, color, position = ToastPositionType.BR} : ICreateToastData){
    toast({
        message: message,
        type: color,
        position: position,
        dismissible: true,
        closeOnClick: true
    })
}