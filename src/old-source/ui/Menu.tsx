import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export default function Menu({ children, classes, styles }: IBaseComponent): JSX.Element {
    return (
        <div className={finalizeClassName(['menu'], classes)} style={styles}>
            { children }
        </div>
    )
}