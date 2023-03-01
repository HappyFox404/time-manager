import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export default function Column({classes, children} : IBaseComponent) : JSX.Element{
    return (
        <div className={finalizeClassName(['column'], classes)}>
            {children}
        </div>
    )
}