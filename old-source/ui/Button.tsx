import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';
import {IClickableType} from "./Clickable";

export interface IButtonType extends IClickableType {
    title: string;
}

export default function Button({ title, tooltip, handleClick, classes, styles }: IButtonType): JSX.Element {
    const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (handleClick)
            handleClick();
    }

    return (
        <a className={finalizeClassName(['button'], classes)}
           style={styles}
           onClick={handleButtonClick}
            title={tooltip}>
            {title}
        </a>
    )
}