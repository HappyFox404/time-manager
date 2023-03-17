import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";
import {BaseElementColor} from "../../../models/Colors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";
import React from "react";

export interface IIconType extends ICommonUI{
    color? : BaseElementColor;
    icon: IconDefinition;
    iconSize?: SizeProp;
    isLeft?: boolean;
    isRight?: boolean;
}

export function Icon({className, style, icon, iconSize, color, isLeft = false, isRight = false} : IIconType) : JSX.Element {
    return <span style={style} className={JoinClasses('icon', className ?? '', color ?? '', (isLeft) ? 'is-left' : '', (isRight) ? 'is-right' : '')}>
        {
            <FontAwesomeIcon icon={icon} size={iconSize}/>
        }
    </span>
}