import {Form} from "../../ui/components/Form";
import {useState} from "react";
import {
    AdditionalElementColor, BaseElementColor,
    Button,
    Buttons,
    ButtonType,
    Field, Fieldset, Flex, FlexAlignItemsType, FlexJustifyContentType,
    Icon,
    InputText,
    InputTextType,
    Label, Line, MarginType, Notification, PaddingType, Title, TooltipType
} from "../../ui";
import {GetStringDate} from "../../helpers";
import {AddSchedulesRequest} from "../api/AddSchedulesRequest";
import {TitleSizeType} from "../../ui/components/elements/Title";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {JoinClasses} from "../../ui/helpers/UIHelper";

export interface IAddSchedulesViewType {
    closeAddView: () => void;
    updateSignal: (signal: string) => void;
}

interface FormData{
    scheduleDate: {value : string};
}

export function AddSchedulesView({closeAddView, updateSignal} : IAddSchedulesViewType) : JSX.Element {
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [isRequest, setIsRequest] = useState<boolean>(false);

    function processing(data: FormData) {
        const promise = new Promise((resolve, reject) => {
            setIsRequest(() => true);
            AddSchedulesRequest(data.scheduleDate.value, resolve, reject);
        });

        promise.then(() => {
            if(updateSignal)
                updateSignal(new Date().getTime().toString());
            setIsRequest(() => false);
            setError(() => '');
            setSuccess(() => 'Данные успешно добавлены!');
        }).catch(message => {
            setIsRequest(() => false);
            setError(() => message);
            setSuccess(() => '');
        });

    }

    function hasError() : JSX.Element {
        if(error.length > 0) return <Notification color={BaseElementColor.Danger} isLightColor>{error}</Notification>;
        return <></>;
    }

    function hasSuccess() : JSX.Element {
        if(success.length > 0) return <Notification color={BaseElementColor.Success} isLightColor>{success}</Notification>;
        return <></>;
    }

    return <>
        <Flex justifyContent={FlexJustifyContentType.SpaceBetween} alignItems={FlexAlignItemsType.Center}>
            <div><Title text={'Добавление расписания'} size={TitleSizeType.IS5}/></div>
            <div>
                <Button type={ButtonType.IsClickableContainer} color={AdditionalElementColor.White} tooltip={'Закрыть панель'}
                        className={JoinClasses(PaddingType.P0, TooltipType.PositionLeft)} style={{width: '30px', height: '30px'}} handleClick={closeAddView}>
                    <Icon icon={faCircleXmark}/>
                </Button>
            </div>
        </Flex>
        <Line className={MarginType.MY2}/>
        <Form handleSubmit={processing}>
            <Fieldset isDisabled={isRequest}>
                { hasError() }
                { hasSuccess() }
                <Field>
                    <Label>Пароль</Label>
                    <InputText type={InputTextType.Date} name='scheduleDate' placeholder={'Выберите дату'} value={GetStringDate(new Date()) ?? undefined}/>
                </Field>
                <Buttons>
                    <Button type={ButtonType.IsSubmit} text='Добавить' color={AdditionalElementColor.White} isOutlined/>
                </Buttons>
            </Fieldset>
        </Form>
    </>
}