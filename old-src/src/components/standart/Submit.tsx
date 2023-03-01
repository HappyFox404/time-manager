import React from 'react'
import IBaseComponent from '../../core/interfaces/IBaseComponent';
import {finalizeClassName} from '../../core/Toolkit';

export interface ISubmitType extends IBaseComponent {
    title: string;
}

export default function Submit({ title, styles, classes }: ISubmitType) : JSX.Element {
    return (
        <div className="field">
            <p className="control">
                <input type='submit' className={finalizeClassName(['button'], classes)} style={styles} value={title}/>
            </p>
        </div>
    )
}