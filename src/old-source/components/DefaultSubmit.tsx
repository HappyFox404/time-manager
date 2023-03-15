import React, { useState } from 'react'
import Label from '../ui/Label';
import Field from '../ui/Field';
import Control from '../ui/Control';
import Submit from '../ui/Submit';

export interface IDefaultSubmitType {
    title: string;
}

export default function DefaultInput({ title }: IDefaultSubmitType): JSX.Element {
    return (
        <Field>
            <Control>
                <Submit title={title}/>
            </Control>
        </Field>
    )
}