import React, { SyntheticEvent } from 'react'
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
import { getDataFromApiResponse, isResponseSuccess } from '../core/Toolkit'
import TokenLocalStorage from '../core/TokenLocalStorage'
import ITokenStorage from '../core/interfaces/ITokenStorage'

export default function Authorization(): JSX.Element {
    const navigate = useNavigate();

    const styles = {
        width: "500px",
        height: "250px",
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
            const data = getDataFromApiResponse<AuthorizationResponse>(res.data);
            if(isResponseSuccess(data?.base)){
                const storage : ITokenStorage = new TokenLocalStorage();
                storage.saveStorage({
                    token: data?.value?.data?.token,
                    refreshToken: data?.value?.data?.refreshToken,
                    isAuthorization: true
                })
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