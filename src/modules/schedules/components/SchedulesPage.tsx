import React, {useEffect, useState} from 'react'
import Column from "../../../ui/Column";
import Box from "../../../ui/Box";
import Columns from "../../../ui/Columns";
import Notification from "../../../ui/Notification";
import Schedule from "../models/schedule";
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../ui/Icon";
import Button from "../../../ui/Button";
import Clickable from "../../../ui/Clickable";
import {AddSchedule} from "./AddSchedule";

enum SchedulesMode {
    View,
    Add,
    Edit
}

export function SchedulesPage(): JSX.Element {
    const [currentMode, setCurrentMode] = useState<SchedulesMode>(SchedulesMode.View);
    const [schedules, setSchedules] = useState<Schedule[]>();

    const styles = {
        height: '99vh',
    };

    function RenderMode() : JSX.Element {
        if(currentMode === SchedulesMode.Add){
            return <Column><AddSchedule/></Column>;
        }
        if(currentMode === SchedulesMode.Edit){
            return <Column><div>Редактирование</div></Column>;
        }
        return <></>;
    }

    function SchedulesList() : JSX.Element {
        if(schedules && schedules.length > 0){
            return <Box classes={['box-app', 'p-3']}></Box>;
        }
        return <Notification classes={['is-warning', 'box-app']} text={"Нет данных для отображения"}/>;
    };

    function SwitchMode(mode: SchedulesMode) : void {setCurrentMode(() => mode)};

    useEffect(() => {

    }, []);

    return <Column classes={['m-1', 'p-1']} styles={styles}>
        <Box classes={['mb-3', 'box-app', 'is-size-3', 'p-3']}>
            <span className='is-flex is-justify-content-center'>Работа с расписанием</span>
        </Box>
        <Columns>
            <Column>
                <Box classes={['box-app', 'p-3', 'is-size-4', 'mb-3', 'is-flex', 'is-justify-content-space-between', 'is-align-items-center']}>
                    <span>Расписание:</span>
                    <Clickable classes={['is-flex', 'is-align-items-center', 'is-justify-content-center']}
                               handleClick={() => SwitchMode(SchedulesMode.Add)}>
                        <Icon icon={faSquarePlus} iconSize={"lg"} classes={['icon-button']} tooltip={'Добавить'}/>
                    </Clickable>
                </Box>
                {SchedulesList()}
            </Column>
            { RenderMode() }
        </Columns>
    </Column>
}