import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export default function MenuItem({ children, classes, styles }: IBaseComponent): JSX.Element {
    return (
        <li className={finalizeClassName([], classes)} style={styles}>
            { children }
        </li>
    )
}