import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

export interface IIconType extends IBaseComponent {
    icon: IconDefinition;
    iconSize?: SizeProp;
}

export default function Icon({ icon, iconSize, classes, styles, tooltip }: IIconType): JSX.Element {
    return (
        <span className={finalizeClassName(['icon'], classes)} style={styles} title={tooltip}>
          <FontAwesomeIcon icon={icon} size={iconSize}/>
        </span>
    )
}