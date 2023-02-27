import React from 'react'
import IBaseComponent from '../../core/interfaces/IBaseComponent';
import {finalizeClassName} from '../../core/Toolkit';

export default function Column({classes, children} : IBaseComponent) : JSX.Element{
    return (
        <div className={finalizeClassName(['column'], classes)}>
            {children}
        </div>
    )
}