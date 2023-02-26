import React from 'react'
import IBaseComponent from '../../core/interfaces/IBaseComponent';

export interface IButtonType extends IBaseComponent {
    title: string;
    handleClick?: () => void;
}

export default function Button({ title, handleClick, classes, styles}: IButtonType) : JSX.Element {
    const finalizeClasses = () : string => {
        if(classes) return ['button', ...classes].join(' ');
        return 'button';
    }

    const handleButtonClick = (event : React.MouseEvent<HTMLElement>) =>{
        event.preventDefault();
        if(handleClick)
            handleClick();
    }

    return (
        <div className="field">
            <p className="control">
                <a className={finalizeClasses()} style={styles} onClick={handleButtonClick}>
                    {title}
                </a>
            </p>
        </div>
    )
}