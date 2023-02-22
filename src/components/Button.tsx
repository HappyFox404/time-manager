import React from 'react'

export interface IButtonType {
    title: string;
    callback?: () => void;
}

export default function Button({ title, callback }: IButtonType) : JSX.Element {

    const clickButton = (event : React.MouseEvent<HTMLElement>) =>{
        event.preventDefault();
        console.log('click event');
        if(callback)
            callback();
    }

    return (
        <div className="field">
            <p className="control">
                <a className="button" onClick={clickButton}>
                    {title}
                </a>
            </p>
        </div>
    )
}