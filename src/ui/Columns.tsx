import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export default function Columns({ classes, children }: IBaseComponent): JSX.Element {
    return (
        <div className={finalizeClassName(['columns'], classes)}>
            { children }
        </div>
    )
}