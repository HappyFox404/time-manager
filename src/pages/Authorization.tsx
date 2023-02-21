import * as React from 'react';
import Input from "../component/Input.tsx";

function Authorization(props) {
    return (
        <div className="box is-narrow form-center column mx-auto">
            <fieldset>
                <Input title="Имя пользователя" placeholder="Введите имя пользователя..."/>
                <Input title="Пароль" placeholder="Введите пароль..."/>
            </fieldset>
        </div>
    );
}

export default Authorization;