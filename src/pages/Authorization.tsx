import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Form from '../components/Form'

export default function Authorization() : JSX.Element {
    const styles = {
        width: "500px",
        height: "250px",
        marginTop: "calc(50vh - calc(250px / 2))",
        outline: "2px solid hsl(0, 0%, 96%)"
    }

    return (
        <div className='column'>
            <Form classes={['box', 'is-narrow', 'mx-auto']} styles={styles}>
                <Input title='Имя пользователя'/>
                <Input title='Пароль'/>
                <Button title='Вход'/>
            </Form>
        </div>
    )
}