import React, { useState } from 'react'

export interface IInputType {
    title: string;
    value?: string;
    type?: string;
    placeHolder?: string;
}

export default function BaseInput({ title, placeHolder = "", value = "", type = "text" }: IInputType) : JSX.Element {
    const [inputValue, setInputValue] = useState(value);

    function handleChangeInput(event : React.ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value);
    }

    return (
        <div className="field">
            <label className="label">
                {title}
            </label>
            <div className="control">
                <input className="input" 
                type={type}
                placeholder={placeHolder} 
                value={inputValue}
                onChange={handleChangeInput}/>
            </div>
        </div>
    )
}