import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../../core/AppRoutes';
import Form from '../../../ui/Form';
import Notification from '../../../ui/Notification';
import DefaultInput from '../../../components/DefaultInput';
import FlexHorizontalContainer from '../../../ui/FlexHorizontalContainer';
import Submit from '../../../ui/Submit';
import Button from '../../../ui/Button';
import PasswordInput from '../../../components/PasswordInput';
import {AuthorizationRequest} from "../api/AuthorizationRequest";
import {useDispatch} from "react-redux";


export function AuthorizationForm(): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [validationError, setValidationError] = useState('');

    const styles = {
        width: "500px",
        minHeight: "250px",
        marginTop: "calc(50vh - calc(250px / 2))",
        outline: "2px solid hsl(0, 0%, 96%)"
    }

    const handleAuthorizationSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            userName: { value: string };
            userPassword: { value: string };
        };
        const userName: string = target.userName.value;
        const password: string = target.userPassword.value;

        AuthorizationRequest(userName, password, navigate, dispatch);
    }

    const handleRegistrationClick = () => {
        navigate(AppRoutes.Registration);
    }

    return (
        <Form classes={['box', 'is-narrow', 'mx-auto']} styles={styles}
              handleSubmit={handleAuthorizationSubmit}>
            <Notification text={validationError} classes={['is-danger', 'is-light']}/>
            <DefaultInput title='Имя пользователя' name='userName' placeHolder='Введите имя пользователя'/>
            <PasswordInput title='Пароль' name='userPassword' placeHolder='Введите пароль'/>
            <FlexHorizontalContainer>
                <Submit title='Вход' classes={['is-dark']}/>
                <Button title='Регистрация' classes={['ml-1']} handleClick={handleRegistrationClick}/>
            </FlexHorizontalContainer>
        </Form>
    )
}