import React from "react";
import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";
import {BaseElementColor} from "../../models/Colors";

export interface IProgressBarType extends ICommonUI {
    color?:BaseElementColor;
    value: number;
    max: number;
    isIntermediante?: boolean;
}
export function ProgressBar({className, style, color, value, max, isIntermediante = false} : IProgressBarType) : JSX.Element {
    function ConstraintValue(value: number) : number{
        if(value > 100){
            return 100;
        } else if(value < 0){
            return 0;
        }
        return value;
    }

    if (!isIntermediante) {
        return <progress style={style} className={JoinClasses('progress', className ?? '', color ?? '')}
                         value={ConstraintValue(value)} max={ConstraintValue(max)}/>
    } else {
        return <progress style={style} className={JoinClasses('progress', className ?? '', color ?? '')} max={ConstraintValue(max)}/>
    }
}