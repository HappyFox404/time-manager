import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export default function MenuList({ children, classes, styles }: IBaseComponent): JSX.Element {
    return (
        <ul className={finalizeClassName(['menu-list'], classes)} style={styles}>
            { children }
        </ul>
    )
}