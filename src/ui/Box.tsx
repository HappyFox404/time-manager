import React from 'react'
import {finalizeClassName, IBaseComponent} from "./IBaseComponent";

export default function Box({ children, classes, styles }: IBaseComponent): JSX.Element {
    return (
        <div className={finalizeClassName(['box'], classes)} style={styles}>
            { children }
        </div>
    )
}