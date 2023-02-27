import React, { useState } from 'react'
import Button from '../components/standart/Button'
import Form from '../components/standart/Form'
import Column from '../components/standart/Column'
import BaseInput from '../components/standart/BaseInput'
import axios from 'axios'
import ApiRoutes, { RouteBuilder } from '../core/ApiRoutes'
import { useNavigate } from 'react-router-dom'
import ApplicationRoutes from '../core/ApplicationRoutes'
import FlexHorizontalContainer from '../components/standart/FlexHorizontalContainer'
import Notification from '../components/standart/Notification'
import { ApiResponse, getDataFromApiResponse } from '../core/Toolkit'
import Submit from '../components/standart/Submit'

export default function Registration(): JSX.Element {
    const navigate = useNavigate();
    const [validationError, setValidationErrorError] = useState('');

    const styles = {
        width: "500px",
        height: "340px",
        marginTop: "calc(50vh - calc(340px / 2))",
        outline: "2px solid hsl(0, 0%, 96%)"
    }

    type RegistrationResponse = {
        token: string;
        refreshToken: string;
    };

    const handleRegistrtionSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            userName: { value: string };
            userPassword: { value: string };
            userEmail: { value: string };
        };
        const userName: string = target.userName.value;
        const password: string = target.userPassword.value;
        const email: string = target.userEmail.value;

        axios.post(RouteBuilder.route(ApiRoutes.UserRegistration), {
            userName,
            password,
            email
        })
        .then((res : any) => {
            const data = getDataFromApiResponse<RegistrationResponse>(res.data);
         })
        .catch((err : any) => { console.log(err); });
    }

    const handleAuthorizationClick = () => {
        navigate(ApplicationRoutes.Authorization);
    }

    return (
        <Column>
            <Form classes={['box', 'is-narrow', 'mx-auto']} styles={styles}
            handleSubmit={handleRegistrtionSubmit}>
                <Notification text={validationError} classes={['is-danger','is-light']}/>
                <BaseInput title='Почта' name='userEmail' placeHolder='Введите email'/>
                <BaseInput title='Имя пользователя' name='userName' placeHolder='Введите имя пользователя'/>
                <BaseInput title='Пароль' type='password' name='userPassword' placeHolder='Введите пароль'/>
                <FlexHorizontalContainer>
                    <Submit title='Создать аккаунт' classes={['is-dark']}/>
                    <Button title='Авторизация' 
                    classes={['ml-1']}
                    handleClick={handleAuthorizationClick}/>
                </FlexHorizontalContainer>
            </Form>
        </Column>
    )
}