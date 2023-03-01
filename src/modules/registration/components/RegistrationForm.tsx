import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RegistrationRequest } from '../api/RegistrationRequest';
import AppRoutes from '../../../constants/AppRoutes';

import Form from '../../../ui/Form';
import Notification from '../../../ui/Notification';
import DefaultInput from '../../../components/DefaultInput';
import FlexHorizontalContainer from '../../../ui/FlexHorizontalContainer';
import Submit from '../../../ui/Submit';
import Button from '../../../ui/Button';
import PasswordInput from '../../../components/PasswordInput';

export function RegistrationForm(): JSX.Element {
    const navigate = useNavigate();

    const [validationError, setValidationError] = useState('');

    const styles = {
        width: "500px",
        minHeight: "340px",
        marginTop: "calc(50vh - calc(340px / 2))",
        outline: "2px solid hsl(0, 0%, 96%)"
    }

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

        RegistrationRequest(userName, password, email);
    }

    const handleAuthorizationClick = () => {
        navigate(AppRoutes.Authorization);
    }

    return (
        <Form classes={['box', 'is-narrow', 'mx-auto']} styles={styles}
            handleSubmit={handleRegistrtionSubmit}>
            <Notification text={validationError} classes={['is-danger', 'is-light']} />
            <DefaultInput title='Почта' name='userEmail' placeHolder='Введите email' />
            <DefaultInput title='Имя пользователя' name='userName' placeHolder='Введите имя пользователя' />
            <PasswordInput title='Пароль' name='userPassword' placeHolder='Введите пароль' />
            <FlexHorizontalContainer>
                <Submit title='Создать аккаунт' classes={['is-dark']} />
                <Button title='Авторизация'
                    classes={['ml-1']}
                    handleClick={handleAuthorizationClick} />
            </FlexHorizontalContainer>
        </Form>
    )
}