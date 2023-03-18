import {Form} from "../../ui/components/Form";
import {
    AdditionalElementColor,
    BaseElementColor,
    Box,
    Button,
    Buttons,
    ButtonType,
    Field,
    Fieldset,
    Icon,
    InputText,
    InputTextType,
    Label,
    MarginType,
    Notification,
    PaddingType
} from "../../ui";
import {Link, useNavigate} from "react-router-dom";
import {faEnvelope, faKey, faUser} from "@fortawesome/free-solid-svg-icons";
import {AppRoutes} from "../../../constants/AppRoutes";
import {JoinClasses} from "../../ui/helpers/UIHelper";
import {useState} from "react";
import {RegistrationRequest} from "../api/RegistrationRequest";

interface FormData{
    userName: {value : string};
    userPassword: {value : string};
    userConfirmPassword: {value : string};
    userEmail: {value: string};
}

export function RegistrationForm() : JSX.Element {
    const navigate = useNavigate();

    const [error, setError] = useState<string>('');
    const [isRequest, setIsRequest] = useState<boolean>(false);

    function validate(data: FormData) : boolean {
        if(data.userEmail.value.length === 0){
            setError("Email обязателен");
            return false;
        }
        if(data.userName.value.length === 0){
            setError("Имя пользователя обязателено");
            return false;
        }
        if(data.userPassword.value !== data.userConfirmPassword.value){
            setError("Пароли не совпадают");
            return false;
        }

        return true;
    }

    function processing(data: FormData) {
        if(!validate(data)){
            return;
        }

        const promise = new Promise((resolve, reject) => {
            setIsRequest(() => true);
            RegistrationRequest(data.userName.value, data.userPassword.value, data.userEmail.value, resolve, reject);
        });

        promise.then(() => {
            setIsRequest(() => false);
            window.location.reload();
        }).catch(message => {
            setIsRequest(() => false);
            setError(() => message);
        });
    }

    function hasError() : JSX.Element {
        if(error.length > 0) return <Notification color={BaseElementColor.Danger} isLightColor>{error}</Notification>;
        return <></>;
    }

    return <Form<FormData> handleSubmit={processing} style={{width: '100%'}}>
        <Box className={JoinClasses('outline')}>
            <Fieldset isDisabled={isRequest}>
                { hasError() }
                <Field>
                    <Label>Имя пользователя</Label>
                    <InputText leftIcon={<Icon icon={faUser} isLeft/>}
                               name='userName' placeholder='Введите имя пользователя'/>
                </Field>
                <Field>
                    <Label>Email</Label>
                    <InputText leftIcon={<Icon icon={faEnvelope} isLeft/>} type={InputTextType.isEmail}
                               name='userEmail' placeholder='Введите почту пользователя'/>
                </Field>
                <Field>
                    <Label>Пароль</Label>
                    <InputText leftIcon={<Icon icon={faKey} isLeft/>} type={InputTextType.IsPassword} name='userPassword' placeholder='Введите пароль'/>
                </Field>
                <Field>
                    <Label>Подтвердите пароль</Label>
                    <InputText leftIcon={<Icon icon={faKey} isLeft/>} type={InputTextType.IsPassword} name='userConfirmPassword' placeholder='Повторите пароль'/>
                </Field>
                <Field className={MarginType.MY2}>
                    <Link className={JoinClasses(PaddingType.PX0, 'white-link')}  to={AppRoutes.Authorization}>У меня уже есть учётная запись</Link>
                </Field>
                <Buttons>
                    <Button type={ButtonType.IsSubmit} text='Войти' color={AdditionalElementColor.White} isOutlined />
                </Buttons>
            </Fieldset>
        </Box>
    </Form>
}