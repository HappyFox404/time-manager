import React from "react";
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export default function Control({children, styles, classes}: IBaseComponent) : JSX.Element{
    return (
        <div className={finalizeClassName(['control'], classes)} style={styles}>
            {children}
        </div>
    )
}