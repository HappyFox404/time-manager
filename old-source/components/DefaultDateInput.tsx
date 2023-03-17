import React, { useState } from 'react'
import Label from '../ui/Label';
import Field from '../ui/Field';
import Control from '../ui/Control';
import Input, {IInputType} from '../ui/Input';

export interface IDefaultDateInputType extends IInputType{
    title: string;
}

export default function DefaultDateInput({ title, name, handleChange, value = '' }: IDefaultDateInputType): JSX.Element {
    return (
        <Field>
            <Label title={title} />
            <Control>
                <Input
                    type={'date'}
                    value={value}
                    name={name}
                    handleChange={handleChange}
                />
            </Control>
        </Field>
    )
}