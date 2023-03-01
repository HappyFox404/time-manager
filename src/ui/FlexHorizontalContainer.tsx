import React from "react";
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export default function FlexHorizontalContainer({children, styles, classes}: IBaseComponent) : JSX.Element{
    return (
        <div className={finalizeClassName(['is-flex','is-flex-direction-row'], classes)} style={styles}>
            {children}
        </div>
    )
}