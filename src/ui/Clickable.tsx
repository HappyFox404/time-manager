import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export interface IClickableType extends IBaseComponent {
    handleClick?: () => void;
}

export default function Clickable({children, handleClick, classes, styles }: IClickableType): JSX.Element {
    const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (handleClick)
            handleClick();
    }

    return (
        <div className={finalizeClassName([], classes)}
           style={styles}
           onClick={handleButtonClick}>
            {children}
        </div>
    )
}