import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface IIconType extends IBaseComponent {
    icon: IconDefinition;
}

export default function Icon({ icon, classes, styles, tooltip }: IIconType): JSX.Element {
    return (
        <span className={finalizeClassName(['icon'], classes)} style={styles} title={tooltip}>
          <FontAwesomeIcon icon={icon}/>
        </span>
    )
}