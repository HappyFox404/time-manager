import React, {useState} from 'react'
import Box from "../../../ui/Box";
import Form from "../../../ui/Form";
import Notification from "../../../ui/Notification";
import DefaultInput from "../../../components/DefaultInput";
import FlexHorizontalContainer from "../../../ui/FlexHorizontalContainer";
import Submit from "../../../ui/Submit";
import DefaultDateInput from "../../../components/DefaultDateInput";
import {AuthorizationRequest} from "../../authorization/api/AuthorizationRequest";

export function AddSchedule(): JSX.Element {
    const [generalError, setGeneralError] = useState<string>('');
    const [scheduleDate, setScheduleDate] = useState<string>('');

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            scheduleDate: { value: string };
        };
        const scheduleDate: string = target.scheduleDate.value;
        console.log(scheduleDate);
    }

    return <>
        <Box classes={['box-app', 'p-3', 'is-size-4', 'mb-3', 'is-flex', 'is-justify-content-space-between', 'is-align-items-center']}>
            <span>Новое расписание:</span>
        </Box>
        <Box classes={['box-app']}>
            <Form handleSubmit={handleSubmit}>
                <Notification text={generalError} classes={['is-danger', 'is-light']}/>
                <DefaultDateInput
                    title='Дата расписания'
                    name='scheduleDate'
                    handleChange={setScheduleDate}
                    value={new Date().toISOString().split('T')[0]}/>
                <Submit title='Добавить' classes={['is-dark']}/>
            </Form>
        </Box>
    </>
}