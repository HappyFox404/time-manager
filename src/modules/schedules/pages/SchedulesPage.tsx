import {Box, Column, Columns, MarginType, PaddingType, VisibleType} from "../../ui";
import {AppMenu} from "../../menu";
import {JoinClasses} from "../../ui/helpers/UIHelper";
import {useState} from "react";
import {Schedule} from "../models/Schedule";
import {EditSchedulesView} from "../components/EditSchedulesView";
import {AddSchedulesView} from "../components/AddSchedulesView";
import {SchedulesView} from "../components/SchedulesView";
import {Provider, useSelector} from "react-redux";
import {SchedulesPageModel} from "../models/SchedulesPageModel";
import {configureStore} from "@reduxjs/toolkit";
import SchedulesViewPageStore from "../store/SchedulesViewPageStore";

export function SchedulesPage() : JSX.Element{
    const schedulesViewStore = configureStore({
        reducer: {
            page: SchedulesViewPageStore
        }
    });

    const mode = useSelector(state => state)
    const [currentSchedule, setCurrentSchedule] = useState<Schedule>({id: '', day: '', userId: '', dateCreated: ''});
    const [signal, setSignal] = useState<string>('');

    function openScheduleView() {setMode(() => SchedulesPageModel.Add)}
    function editScheduleView(schedule: Schedule) {
        setCurrentSchedule(() => schedule);
        setMode(() => SchedulesPageModel.Edit);
    }
    function closeAllView() {setMode(() => SchedulesPageModel.None)}
    function updateSchedulesView(signal : string) {setSignal(() => signal);}

    function RenderSchedulesActionView() : JSX.Element | undefined {
        if (mode === SchedulesPageModel.Add) {
            return <AddSchedulesView closeAddView={closeAllView} updateSignal={updateSchedulesView}/>
        }
        if (mode === SchedulesPageModel.Edit) {
            return <EditSchedulesView closeAddView={closeAllView} updateSignal={updateSchedulesView}
                                      schedule={currentSchedule}/>
        }
        return undefined;
    }

    return <Provider store={schedulesViewStore}>
        <Columns>
            <Column className={JoinClasses(MarginType.ML4, PaddingType.PX1)} style={{width: '300px'}} isNarrow={true}>
                <Box className={JoinClasses('outline', MarginType.MY2)}>
                    <AppMenu/>
                </Box>
            </Column>
            <Column className={JoinClasses(MarginType.ML0, PaddingType.PX1, (mode === SchedulesPageModel.None) ? MarginType.MR3 : '')}>
                <Box className={JoinClasses('outline', MarginType.MY2)}>
                    <SchedulesView openAddView={openScheduleView} openEditView={editScheduleView} signal={signal}/>
                </Box>
            </Column>
            <Column className={JoinClasses(MarginType.ML0, MarginType.MR3, PaddingType.PX1, (mode === SchedulesPageModel.None) ? VisibleType.IsHidden : '')}>
                <Box className={JoinClasses('outline', MarginType.MY2)}>
                    {RenderSchedulesActionView()}
                </Box>
            </Column>
        </Columns>
    </Provider>
}