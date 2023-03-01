import React, { useState } from 'react'
import Label from '../ui/Label';
import Field from '../ui/Field';
import Control from '../ui/Control';
import Input from '../ui/Input';
import { IDefaultInputType } from './DefaultInput';

export default function DefaultInput({ title, name, handleChange, placeHolder = "", value = "" }: IDefaultInputType): JSX.Element {
    return (
        <Field>
            <Label title={title} />
            <Control>
                <Input
                    type='password'
                    placeholder={placeHolder}
                    value={value}
                    handleChange={handleChange}
                />
            </Control>
        </Field>
    )
}