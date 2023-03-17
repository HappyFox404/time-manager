import React, {useEffect, useState} from 'react'
import Column from "../../../ui/Column";
import Box from "../../../ui/Box";
import Columns from "../../../ui/Columns";
import Schedule from "../models/Schedule";
import {AddSchedule} from "./AddSchedule";
import {GetScheduleRequest} from "../api/GetScheduleRequest";
import SchedulesMode from "../models/SchedulesMode";
import ViewSchedules from "./ViewSchedules";

export function SchedulesPage(): JSX.Element {
    const [currentMode, setCurrentMode] = useState<SchedulesMode>(SchedulesMode.View);
    const [schedulesError, setSchedulesError] = useState<string>('');
    const [schedules, setSchedules] = useState<Schedule[]>([]);

    const styles = {
        height: '99vh',
    };

    function AppendSchedule(schedule: Schedule | null){
        if(schedule !== null){
            setSchedules(() => [schedule, ...schedules]);
        }
    }

    function RenderMode() : JSX.Element {
        if(currentMode === SchedulesMode.Add){
            return <Column><AddSchedule signal={AppendSchedule}/></Column>;
        }
        if(currentMode === SchedulesMode.Edit){
            return <Column><div>Редактирование</div></Column>;
        }
        return <></>;
    }

    function SwitchMode(mode: SchedulesMode) : void {setCurrentMode(() => mode)};

    useEffect(() => {
        GetScheduleRequest(
            (err : string) => setSchedulesError(err),
            (data:Schedule[] | null) => {
                if(data !== null){
                    setSchedules(() => data);
                } else {
                    setSchedules(() => []);
                }
            });
    }, []);

    return <Column classes={['m-1', 'p-1']} styles={styles}>
        <Box classes={['mb-3', 'box-app', 'is-size-3', 'p-3']}>
            <span className='is-flex is-justify-content-center'>Работа с расписанием</span>
        </Box>
        <Columns>
            <ViewSchedules schedules={schedules} schedulesError={schedulesError} SwitchMode={SwitchMode}/>
            { RenderMode() }
        </Columns>
    </Column>
}