import React from 'react'
import Button from '../components/standart/Button'
import Form from '../components/standart/Form'
import Column from '../components/standart/Column'
import BaseInput from '../components/standart/BaseInput'

export default function Authorization() : JSX.Element {
    const styles = {
        width: "500px",
        height: "250px",
        marginTop: "calc(50vh - calc(250px / 2))",
        outline: "2px solid hsl(0, 0%, 96%)"
    }

    return (
        <Column>
            <Form classes={['box', 'is-narrow', 'mx-auto']} styles={styles}>
                <BaseInput title='Имя пользователя'/>
                <BaseInput title='Пароль'/>
                <Button title='Вход'/>
            </Form>
        </Column>
    )
}