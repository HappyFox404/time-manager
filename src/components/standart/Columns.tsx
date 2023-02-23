import React from 'react'
import IBaseComponent from '../../core/interfaces/IBaseComponent';

export interface IColumnsType extends IBaseComponent{}

export default function Columns({ classes, children }: IColumnsType): JSX.Element {
    const finalizeClasses = () : string => {
        if(classes) return ['columns', ...classes].join(' ');
        return 'columns';
    }
    
    return (
        <div className={finalizeClasses()}>
            { children }
        </div>
    )
}