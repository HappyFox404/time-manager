import React from 'react'
import Schedule from "../models/Schedule";
import Box from "../../../ui/Box";
import {GetFormatStringDateToNormallize} from "../../../core/DateHelper";

export interface IViewScheduleItemType {
    schedule: Schedule;
}

export default function ViewScheduleItem({ schedule } : IViewScheduleItemType) : JSX.Element {
    return <Box classes={['p-2', 'is-size-5']}>
        <span>{GetFormatStringDateToNormallize(schedule.day)}</span>
    </Box>
}