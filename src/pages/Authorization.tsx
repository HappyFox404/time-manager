import React, { SyntheticEvent } from 'react'
import Button from '../components/standart/Button'
import Form from '../components/standart/Form'
import Column from '../components/standart/Column'
import BaseInput from '../components/standart/BaseInput'
import Submit from '../components/standart/Submit'

export default function Authorization() : JSX.Element {
    const styles = {
        width: "500px",
        height: "250px",
        marginTop: "calc(50vh - calc(250px / 2))",
        outline: "2px solid hsl(0, 0%, 96%)"
    }

    const handleAuthorizationSubmit = (event: React.SyntheticEvent) => {
        console.log(event.target);
    }

    return (
        <Column>
            <Form classes={['box', 'is-narrow', 'mx-auto']} styles={styles}
                callbackSubmit={handleAuthorizationSubmit}>
                <BaseInput title='Имя пользователя'/>
                <BaseInput title='Пароль' type="password"/>
                <Submit title='Вход'/>
            </Form>
        </Column>
    )
}