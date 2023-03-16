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
}

export function Icon({className, style, icon, iconSize, color} : IIconType) : JSX.Element {
    return <span style={style} className={JoinClasses('icon', className ?? '', color ?? '')}>
        {
            <FontAwesomeIcon icon={icon} size={iconSize}/>
        }
    </span>
}