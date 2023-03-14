import React from 'react'
import Schedule from "../models/Schedule";
import Box from "../../../ui/Box";
import Notification from "../../../ui/Notification";
import Clickable from "../../../ui/Clickable";
import Icon from "../../../ui/Icon";
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import Column from "../../../ui/Column";
import SchedulesMode from "../models/SchedulesMode";
import ViewScheduleItem from "./ViewScheduleItem";

export interface IViewSchedulesType {
    schedules : Schedule[]
    schedulesError: string;
    SwitchMode(mode:SchedulesMode): void;
}

export default function ViewSchedules({ schedules, schedulesError, SwitchMode } : IViewSchedulesType): JSX.Element {

    function SchedulesList() : JSX.Element {
        if(schedulesError === '') {
            if (schedules && schedules.length > 0) {
                return <Box classes={['box-app', 'p-3']}>
                    {schedules.map((item, id) => <ViewScheduleItem schedule={item} key={id}/>)}
                </Box>;
            }
            return <Notification classes={['is-warning', 'box-app']} text={"Нет данных для отображения"}/>;
        } else {
            return <Notification classes={['is-danger', 'is-light']} text={schedulesError}/>;
        }
    };

    return <Column>
        <Box classes={['box-app', 'p-3', 'is-size-4', 'mb-3', 'is-flex', 'is-justify-content-space-between', 'is-align-items-center']}>
            <span>Расписание:</span>
            <Clickable classes={['is-flex', 'is-align-items-center', 'is-justify-content-center']}
                       handleClick={() => SwitchMode(SchedulesMode.Add)}>
                <Icon icon={faSquarePlus} iconSize={"lg"} classes={['icon-button']} tooltip={'Добавить'}/>
            </Clickable>
        </Box>
        {SchedulesList()}
    </Column>
}