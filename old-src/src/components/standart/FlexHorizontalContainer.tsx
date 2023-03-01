import React from "react";
import IBaseComponent from "../../core/interfaces/IBaseComponent";
import {finalizeClassName} from "../../core/Toolkit";

export default function FlexHorizontalContainer({children, styles, classes}: IBaseComponent) : JSX.Element{
    return (
        <div className={finalizeClassName(['is-flex','is-flex-direction-row'], classes)} style={styles}>
            {children}
        </div>
    )
}