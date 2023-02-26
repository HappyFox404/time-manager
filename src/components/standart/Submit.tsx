import React from 'react'
import IBaseComponent from '../../core/interfaces/IBaseComponent';

export interface ISubmitType extends IBaseComponent {
    title: string;
}

export default function Submit({ title, styles, classes }: ISubmitType) : JSX.Element {
    const finalizeClasses = () : string => {
        if(classes) return ['button', ...classes].join(' ');
        return 'button';
    }

    return (
        <div className="field">
            <p className="control">
                <input type='submit' className={finalizeClasses()} style={styles} value={title}/>
            </p>
        </div>
    )
}