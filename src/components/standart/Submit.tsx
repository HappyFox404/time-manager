import React from 'react'

export interface ISubmitType {
    title: string;
}

export default function Submit({ title }: ISubmitType) : JSX.Element {
    return (
        <div className="field">
            <p className="control">
                <input type='submit' className="button" value={title}/>
            </p>
        </div>
    )
}