import React from 'react'
import IBaseComponent from '../../core/interfaces/IBaseComponent';
import {finalizeClassName} from '../../core/Toolkit';

export default function Columns({ classes, children }: IBaseComponent): JSX.Element {
    return (
        <div className={finalizeClassName(['columns'], classes)}>
            { children }
        </div>
    )
}