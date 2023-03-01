import React, {SyntheticEvent, useState} from 'react'
import Column from '../ui/Column'
import {AuthorizationForm} from "../modules/authorization";

export default function Authorization(): JSX.Element {
    return (
        <Column>
            <AuthorizationForm/>
        </Column>
    )
}