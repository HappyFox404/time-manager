import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export interface ISubmitType extends IBaseComponent {
    title: string;
}

export default function Submit({ title, styles, classes }: ISubmitType) : JSX.Element {
    return (
        <input type='submit' value={title} className={finalizeClassName(['button'], classes)} style={styles}/>
    )
}