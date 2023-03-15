import React from "react";
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export default function Field({children, styles, classes}: IBaseComponent) : JSX.Element{
    return (
        <div className={finalizeClassName(['field'], classes)} style={styles}>
            {children}
        </div>
    )
}