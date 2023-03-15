import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {RegistrationRequest} from '../api/RegistrationRequest';
import AppRoutes from '../../../core/AppRoutes';

import Form from '../../../ui/Form';
import Notification from '../../../ui/Notification';
import DefaultInput from '../../../components/DefaultInput';
import FlexHorizontalContainer from '../../../ui/FlexHorizontalContainer';
import Submit from '../../../ui/Submit';
import Button from '../../../ui/Button';
import PasswordInput from '../../../components/PasswordInput';
import {useDispatch} from "react-redux";

export function RegistrationForm(): JSX.Element {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [generalError, setGeneralError] = useState<string>('');

    const [emailValue, setEmailValue] = useState<string>('');
    const [userNameValue, setUserNameValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [passwordConfirmValue, setPasswordConfirmValue] = useState<string>('');

    const setSubmitError = (value: string) => setGeneralError(value);

    const styles = {
        width: "500px",
        minHeight: "340px",
        marginTop: "calc(50vh - calc(340px / 2))",
        outline: "2px solid hsl(0, 0%, 96%)"
    }

    const validate = () : boolean => {
        if(emailValue.length === 0){
            setGeneralError("Email обязателен");
            return false;
        }
        if(userNameValue.length === 0){
            setGeneralError("Имя пользователя обязателено");
            return false;
        }
        if(passwordValue !== passwordConfirmValue){
            setGeneralError("Пароли не совпадают");
            return false;
        }

        return true;
    }

    const handleRegistrtionSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if(!validate()){
            return;
        }

        const target = event.target as typeof event.target & {
            userName: { value: string };
            userPassword: { value: string };
            userEmail: { value: string };
        };
        const userName: string = target.userName.value;
        const password: string = target.userPassword.value;
        const email: string = target.userEmail.value;

        RegistrationRequest(userName, password, email, navigate, dispatch, setSubmitError);
    }

    const handleAuthorizationClick = () => {
        navigate(AppRoutes.Authorization);
    }

    return (
        <Form classes={['box', 'is-narrow', 'mx-auto']} styles={styles}
            handleSubmit={handleRegistrtionSubmit}>
            <Notification text={generalError} classes={['is-danger', 'is-light']} />
            <DefaultInput title='Почта' name='userEmail' placeHolder='Введите email' handleChange={setEmailValue}/>
            <DefaultInput title='Имя пользователя' name='userName' placeHolder='Введите имя пользователя' handleChange={setUserNameValue}/>
            <PasswordInput title='Пароль' name='userPassword' placeHolder='Введите пароль' handleChange={setPasswordValue}/>
            <PasswordInput title='Подтвержение пароля' name='userPasswordConfirm' placeHolder='Введите пароль' handleChange={setPasswordConfirmValue}/>
            <FlexHorizontalContainer>
                <Submit title='Создать аккаунт' classes={['is-dark']} />
                <Button title='Авторизация'
                    classes={['ml-1']}
                    handleClick={handleAuthorizationClick} />
            </FlexHorizontalContainer>
        </Form>
    )
}