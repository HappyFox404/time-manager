import React, {useState} from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export interface IInputType extends IBaseComponent {
    name?:string;
    value?:string;
    placeholder?:string;
    type?:string;
    handleChange?: (value: string) => void;
}

export default function Input({name, handleChange, value ="", placeholder, styles, classes, type = "text" }: IInputType) : JSX.Element {
    const [inputValue, setInputValue] = useState(value);

    function handleChangeInput(event : React.ChangeEvent<HTMLInputElement>){
        if(handleChange)
            handleChange(event.target.value);
        setInputValue(event.target.value);
    }

    return (
        <input onChange={(event) => handleChangeInput(event)}
        type={type} 
        className={finalizeClassName(['input'], classes)} 
        style={styles} 
        name={name} 
        value={inputValue}
        placeholder={placeholder}/>
    )
}