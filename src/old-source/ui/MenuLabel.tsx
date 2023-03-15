import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export interface IMenuLabel extends IBaseComponent{
    title: string;
}

export default function MenuLabel({ title, classes, styles }: IMenuLabel): JSX.Element {
    return (
        <p className={finalizeClassName(['menu-label'], classes)} style={styles}>
            { title }
        </p>
    )
}