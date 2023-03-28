import {configureStore, createSlice} from '@reduxjs/toolkit'
import {SchedulesPageModel} from "../models/SchedulesPageModel";

const pageModeSlice = createSlice({
    name: 'page',
    initialState: {
        mode: SchedulesPageModel.None
    },
    reducers: {
        nonePage: state => {state.mode = SchedulesPageModel.None},
        addPage: state => {state.mode = SchedulesPageModel.Add},
        editPage: state => {state.mode = SchedulesPageModel.Edit},
    }
});

export const {nonePage, addPage, editPage} = pageModeSlice.actions;

export default pageModeSlice.reducer