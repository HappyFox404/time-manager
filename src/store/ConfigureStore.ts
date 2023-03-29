import {configureStore} from "@reduxjs/toolkit";
import schedulesViewSlice from "../modules/schedules/store/SchedulesViewSlice";

const store = configureStore({
    reducer: {
        schedulesView: schedulesViewSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch