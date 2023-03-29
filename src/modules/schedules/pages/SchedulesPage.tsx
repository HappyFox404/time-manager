import {Box, Column, Columns, MarginType, PaddingType, VisibleType,JoinClasses} from "../../ui";
import {AppMenu} from "../../menu";
import {useEffect, useState} from "react";
import {Schedule} from "../models/Schedule";
import {EditSchedulesView} from "../components/EditSchedulesView";
import {AddSchedulesView} from "../components/AddSchedulesView";
import {SchedulesView} from "../components/SchedulesView";
import {useSelector} from "react-redux";
import {SchedulesPageMode} from "../models/SchedulesPageMode";
import {useAppDispatch, useAppSelector} from "../../../store/StoreHooks";
import {GetSchedulesRequest} from "../api/GetSchedulesRequest";
import {setSchedules, updateTimeStamp} from "../store/SchedulesViewSlice";

export function SchedulesPage() : JSX.Element{
    const dispatch = useAppDispatch();

    const mode = useAppSelector(state => state.schedulesView.mode);
    const schedules = useAppSelector(state => state.schedulesView.schedules);
    const loadTimeStamp = useAppSelector(state => state.schedulesView.loadDataTimeStamp);

    const [error, setError] = useState<string>('');
    const [isLoadData, setIsLoadData] = useState<boolean>(false);

    useEffect(() => {
        RequestData();
    }, [loadTimeStamp]);

    function RequestData() : void {
        const promise = new Promise((resolve, reject) => {
            GetSchedulesRequest(100, resolve, reject);
        });
        promise.then((data) => {
            dispatch(setSchedules(data as Schedule[]))
            setIsLoadData(() => true);
        }).catch(message => {
            setIsLoadData(() => true);
            setError(() => message);
        });
    }

    function RenderSchedulesActionView() : JSX.Element | undefined {
        if (mode === SchedulesPageMode.Add) {
            return <AddSchedulesView />
        }
        if (mode === SchedulesPageMode.Edit) {
            return <EditSchedulesView />
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
                <SchedulesView schedules={schedules} isLoadData={isLoadData} error={error}/>
            </Box>
        </Column>
        <Column className={JoinClasses(MarginType.ML0, MarginType.MR3, PaddingType.PX1, (mode === SchedulesPageMode.None) ? VisibleType.IsHidden : '')}>
            <Box className={JoinClasses('outline', MarginType.MY2)}>
                {RenderSchedulesActionView()}
            </Box>
        </Column>
    </Columns>
}