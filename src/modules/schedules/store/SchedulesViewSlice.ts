import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SchedulesPageMode} from "../models/SchedulesPageMode";
import {defaultState, Schedule} from "../models/Schedule";

interface ISchedulesViewState {
    mode: SchedulesPageMode;
    schedules: Schedule[];
    currentSchedule: Schedule;
    loadDataTimeStamp: string;
}

const initialState: ISchedulesViewState = {
    mode: SchedulesPageMode.None,
    schedules : [],
    currentSchedule: defaultState,
    loadDataTimeStamp: new Date().toUTCString()
}

export const SchedulesViewSlice = createSlice({
    name: 'SchedulesViewSlice',
    initialState,
    reducers: {
        addViewMode: state => {state.mode = SchedulesPageMode.Add},
        editViewMode: state => {state.mode = SchedulesPageMode.Edit},
        noneViewMode: state => {state.mode = SchedulesPageMode.None},
        setSchedules: (state, action: PayloadAction<Schedule[]>) => {state.schedules = action.payload},
        updateTimeStamp: state => {state.loadDataTimeStamp = new Date().toUTCString()},
        setCurrentSchedule: (state, action: PayloadAction<Schedule>) => {state.currentSchedule = action.payload},
    }
})

export const {
    addViewMode,
    editViewMode,
    noneViewMode,
    setSchedules,
    updateTimeStamp,
    setCurrentSchedule
} = SchedulesViewSlice.actions

export default SchedulesViewSlice.reducer