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
import {faKey, faUser} from "@fortawesome/free-solid-svg-icons";
import {AppRoutes} from "../../../constants/AppRoutes";
import {JoinClasses} from "../../ui/helpers/UIHelper";
import {useState} from "react";
import {AuthorizationRequest} from "../api/AuthorizationRequest";

interface FormData{
    userName: {value : string};
    userPassword: {value : string};
}

export function AuthorizationForm() : JSX.Element {
    const navigate = useNavigate();

    const [error, setError] = useState<string>('');

    function validate(data: FormData) : boolean {
        if(data.userName.value.length === 0){
            setError("Имя пользователя обязателено");
            return false;
        }
        if(data.userPassword.value.length === 0){
            setError("Пароль не может быть пустым");
            return false;
        }

        return true;
    }

    function processing(data: FormData) {
        if(!validate(data)){
            return;
        }

        AuthorizationRequest(data.userName.value, data.userPassword.value, setError);
    }

    function hasError() : JSX.Element {
        if(error.length > 0) return <Notification color={BaseElementColor.Danger} isLightColor>{error}</Notification>;
        return <></>;
    }

    return <Form<FormData> handleSubmit={processing} style={{width: '100%'}}>
        <Box className={JoinClasses('outline')}>
            <Fieldset>
                { hasError() }
                <Field>
                    <Label>Имя пользователя</Label>
                    <InputText leftIcon={<Icon icon={faUser} isLeft/>}
                               name='userName' placeholder='Введите ия пользователя'/>
                </Field>
                <Field>
                    <Label>Пароль</Label>
                    <InputText leftIcon={<Icon icon={faKey} isLeft/>} type={InputTextType.IsPassword} name='userPassword' placeholder='Введите пароль'/>
                </Field>
                <Field className={MarginType.MY2}>
                    <Link className={JoinClasses(PaddingType.PX0, 'white-link')}  to={AppRoutes.Registration}>Нет учётной записи?</Link>
                </Field>
                <Buttons>
                    <Button type={ButtonType.IsSubmit} text='Войти' color={AdditionalElementColor.White} isOutlined/>
                </Buttons>
            </Fieldset>
        </Box>
    </Form>
}