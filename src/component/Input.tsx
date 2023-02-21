import * as React from 'react';

export interface InputProps {
    title? : string,
    placeholder? : string,
    editCallback? : () => void
}

function Input({title, placeholder, editCallback} : InputProps) {

    return (
        <div className="field">
            <label className="label">{title}</label>
            <div className="control">
                <input className="input" type="text" placeholder={placeholder}/>
            </div>
        </div>
    );
}

export default Input;