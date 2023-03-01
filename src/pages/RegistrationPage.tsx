import React, { useState } from 'react'
import Column from '../ui/Column'
import RegistrationForm from '../modules/registration/index'

export default function RegistrationPage(): JSX.Element {
    return (
        <Column>
            <RegistrationForm/>
        </Column>
    )
}