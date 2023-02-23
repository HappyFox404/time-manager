import React, { useState } from 'react'

export interface IInputType {
    title: string;
    value?: string;
    placeHolder?: string;
}

export default function BaseInput({ title, placeHolder = "", value = "" }: IInputType) : JSX.Element {
    const [inputValue, setInputValue] = useState(value);

    function changeInput(event : React.ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value);
        console.log(inputValue);
    }

    return (
        <div className="field">
            <label className="label">
                {title}
            </label>
            <div className="control">
                <input className="input" 
                type="text" 
                placeholder={placeHolder} 
                value={inputValue}
                onChange={changeInput}/>
            </div>
        </div>
    )
}