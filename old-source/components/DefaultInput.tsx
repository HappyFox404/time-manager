import React, { useState } from 'react'
import Label from '../ui/Label';
import Field from '../ui/Field';
import Control from '../ui/Control';
import Input from '../ui/Input';

export interface IDefaultInputType {
    title: string;
    name?: string;
    value?: string;
    placeHolder?: string;
    handleChange?: (value: string) => void;
}

export default function DefaultInput({ title, name, handleChange, placeHolder = "", value = "" }: IDefaultInputType): JSX.Element {
    return (
        <Field>
            <Label title={title} />
            <Control>
                <Input
                    placeholder={placeHolder}
                    value={value}
                    name={name}
                    handleChange={handleChange}
                />
            </Control>
        </Field>
    )
}