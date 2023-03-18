import {Box, Column, Columns, MarginType, PaddingType, VisibleType} from "../modules/ui";
import {AppMenu} from "../modules/menu";
import {JoinClasses} from "../modules/ui/helpers/UIHelper";
import {useState} from "react";
import {AddSchedulesView, SchedulesView} from "../modules/schedules";

enum SchedulesPageMode {
    None,
    Add,
    Edit
}

export default function SchedulesPage() : JSX.Element{
    const [mode, setMode] = useState<SchedulesPageMode>(SchedulesPageMode.None);
    const [signal, setSignal] = useState<string>('');

    function openScheduleView() {setMode(() => SchedulesPageMode.Add)}
    function closeAllView() {setMode(() => SchedulesPageMode.None)}
    function updateSchedulesView(signal : string) {setSignal(() => signal);}

    function RenderSchedulesActionView() : JSX.Element | undefined {
        if(mode === SchedulesPageMode.Add){
            return <AddSchedulesView closeAddView={closeAllView} updateSignal={updateSchedulesView}/>
        }
        return undefined;
    }

    return <Columns>
        <Column className={JoinClasses(MarginType.ML4, PaddingType.PX1)} style={{width: '300px'}} isNarrow={true}>
            <Box className={JoinClasses('outline', MarginType.MY2)}>
                <AppMenu/>
            </Box>
        </Column>
        <Column className={JoinClasses(MarginType.ML0, PaddingType.PX1, (mode === SchedulesPageMode.None) ? MarginType.MR3 : '')}>
            <Box className={JoinClasses('outline', MarginType.MY2)}>
                <SchedulesView openAddView={openScheduleView} signal={signal}/>
            </Box>
        </Column>
        <Column className={JoinClasses(MarginType.ML0, MarginType.MR3, PaddingType.PX1, (mode === SchedulesPageMode.None) ? VisibleType.IsHidden : '')}>
            <Box className={JoinClasses('outline', MarginType.MY2)}>
                {RenderSchedulesActionView()}
            </Box>
        </Column>
    </Columns>
}