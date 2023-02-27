import React, {SyntheticEvent, useState} from 'react'
import Button from '../components/standart/Button'
import Form from '../components/standart/Form'
import Column from '../components/standart/Column'
import BaseInput from '../components/standart/BaseInput'
import Submit from '../components/standart/Submit'
import axios from 'axios'
import ApiRoutes, { RouteBuilder } from '../core/ApiRoutes'
import FlexHorizontalContainer from '../components/standart/FlexHorizontalContainer'
import { useNavigate } from 'react-router-dom'
import ApplicationRoutes from '../core/ApplicationRoutes'
import {getDataApiResponse, getResponseApi, isResponseError, isResponseSuccess} from '../core/Toolkit'
import TokenLocalStorage from '../core/TokenLocalStorage'
import ITokenStorage from '../core/interfaces/ITokenStorage'
import Notification from "../components/standart/Notification";
import {useDispatch} from "react-redux";
import ApplicationStateActions from "../core/interfaces/IApplicationState";

export default function Authorization(): JSX.Element {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [validationError, setValidationError] = useState('');

    const styles = {
        width: "500px",
        minHeight: "250px",
        marginTop: "calc(50vh - calc(250px / 2))",
        outline: "2px solid hsl(0, 0%, 96%)"
    }

    type AuthorizationResponse = {
        token: string;
        refreshToken: string;
    }

    const handleAuthorizationSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            userName: { value: string };
            userPassword: { value: string };
        };
        const userName: string = target.userName.value;
        const password: string = target.userPassword.value;

        axios.get(RouteBuilder.route(ApiRoutes.UserLogin), {
            params: {
                userName,
                password
            }
        })
        .then((res : any) => {
            const resposne = getResponseApi<AuthorizationResponse>(res.data);
            if(isResponseSuccess<AuthorizationResponse>(resposne)){
                const responseData = getDataApiResponse<AuthorizationResponse>(res.data);
                if(responseData !== null) {
                    dispatch({type: ApplicationStateActions.Authorize, tokenData:{
                            token: responseData?.data?.token ?? '',
                            refreshToken: responseData?.data?.refreshToken ?? '',
                            isAuthorization: true
                        }});
                    navigate(ApplicationRoutes.Base);
                }
            }
            if(isResponseError<AuthorizationResponse>(resposne)){
                const responseData = getDataApiResponse<AuthorizationResponse>(res.data);
                setValidationError(responseData?.message ?? 'Непредвиденная ошибка');
            }
        })
        .catch((err : any) => console.log(err));
    }

    const handleRegistrationClick = () => {
        navigate(ApplicationRoutes.Registration);
    }

    return (
        <Column>
            <Form classes={['box', 'is-narrow', 'mx-auto']} styles={styles}
                handleSubmit={handleAuthorizationSubmit}>
                <Notification text={validationError} classes={['is-danger','is-light']}/>
                <BaseInput title='Имя пользователя' name='userName' placeHolder='Введите имя пользователя'/>
                <BaseInput title='Пароль' name='userPassword' type="password" placeHolder='Введите пароль'/>
                <FlexHorizontalContainer>
                    <Submit title='Вход' classes={['is-dark']}/>
                    <Button title='Регистрация' classes={['ml-1']} handleClick={handleRegistrationClick}/>
                </FlexHorizontalContainer>
            </Form>
        </Column>
    )
}