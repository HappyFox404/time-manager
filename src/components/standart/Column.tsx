import React from 'react'
import IBaseComponent from '../../core/interfaces/IBaseComponent';

export interface IColumnType extends IBaseComponent{}

export default function Column({classes, children} : IColumnType) : JSX.Element{
    const finalizeClasses = () : string => {
        if(classes) return ['column', ...classes].join(' ');
        return 'column';
    }

    return (
        <div className={finalizeClasses()}>
            {children}
        </div>
    )
}