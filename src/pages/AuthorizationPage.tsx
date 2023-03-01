import React, {SyntheticEvent, useState} from 'react'
import AuthorizationForm from '../modules/authorization/index'
import Column from '../ui/Column'

export default function Authorization(): JSX.Element {
    return (
        <Column>
            <AuthorizationForm/>
        </Column>
    )
}