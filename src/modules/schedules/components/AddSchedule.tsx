import React, {useState} from 'react'
import Box from "../../../ui/Box";
import Form from "../../../ui/Form";
import Notification from "../../../ui/Notification";
import DefaultInput from "../../../components/DefaultInput";
import FlexHorizontalContainer from "../../../ui/FlexHorizontalContainer";
import Submit from "../../../ui/Submit";
import DefaultDateInput from "../../../components/DefaultDateInput";
import {AuthorizationRequest} from "../../authorization/api/AuthorizationRequest";
import {GetStringDate} from "../../../core/DateHelper";
import {AddScheduleRequest} from "../api/AddScheduleRequest";
import Schedule from "../models/Schedule";

export interface IAddScheduleType {
    signal(schedule: Schedule | null): void;
}

export function AddSchedule({signal} : IAddScheduleType): JSX.Element {
    const [generalError, setGeneralError] = useState<string>('');
    const [generalSuccess, setGeneralSuccess] = useState<string>('');

    const setSubmitError = (value: string) => {
        setGeneralError(() => value);
        setGeneralSuccess(() => '');
    }
    const setSubmitSuccess = (schedule: Schedule | null) => {
        setGeneralError(() => '');
        setGeneralSuccess(() => 'Распиание успешно добавлено');
        if(signal){
            signal(schedule);
        }
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            scheduleDate: { value: string };
        };
        const scheduleDate: string = target.scheduleDate.value;
        AddScheduleRequest(scheduleDate, setSubmitError, setSubmitSuccess);
    }

    return <>
        <Box classes={['box-app', 'p-3', 'is-size-4', 'mb-3', 'is-flex', 'is-justify-content-space-between', 'is-align-items-center']}>
            <span>Новое расписание:</span>
        </Box>
        <Box classes={['box-app']}>
            <Form handleSubmit={handleSubmit}>
                <Notification text={generalError} classes={['is-danger', 'is-light']}/>
                <Notification text={generalSuccess} classes={['is-success', 'is-light']}/>
                <DefaultDateInput
                    title='Дата расписания'
                    name='scheduleDate'
                    value={GetStringDate(new Date()) ?? undefined}/>
                <Submit title='Добавить' classes={['is-dark']}/>
            </Form>
        </Box>
    </>
}