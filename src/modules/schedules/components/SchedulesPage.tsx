import React, {useEffect, useState} from 'react'
import Column from "../../../ui/Column";
import Box from "../../../ui/Box";
import Columns from "../../../ui/Columns";
import Notification from "../../../ui/Notification";
import Schedule from "../models/schedule";
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../ui/Icon";

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

    function SwitchMode() : JSX.Element {
        if(currentMode === SchedulesMode.Add){
            return <Column><div>Добавление</div></Column>;
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

    useEffect(() => {

    }, []);

    return <Column classes={['m-1', 'p-1']} styles={styles}>
        <Box classes={['mb-3', 'box-app', 'is-size-3', 'p-3']}>
            <span className='is-flex is-justify-content-center'>Работа с расписанием</span>
        </Box>
        <Columns>
            <Column>
                <Box classes={['box-app', 'p-3', 'is-size-4', 'mb-3', 'is-flex', 'is-justify-content-space-between']}>
                    <span>Текущие элементы</span>
                    <div>
                        <Icon icon={faSquarePlus} classes={['has-text-info']} tooltip={'Добавить'}/>
                    </div>
                </Box>
                {SchedulesList()}
            </Column>
            { SwitchMode() }
        </Columns>
    </Column>
}