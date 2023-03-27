import {
    AdditionalElementColor,
    BaseElementColor,
    Button,
    ButtonType,
    Flex,
    FlexAlignItemsType,
    FlexJustifyContentType,
    Icon,
    Line,
    MarginType,
    Notification,
    PaddingType,
    Title, TooltipType
} from "../../ui";
import {TitleSizeType} from "../../ui/components/elements/Title";
import {useEffect, useState} from "react";
import {Schedule} from "../models/Schedule";
import {SchedulesViewItem} from "./SchedulesViewItem";
import {GetSchedulesRequest} from "../api/GetSchedulesRequest";
import {faCalendarPlus} from "@fortawesome/free-solid-svg-icons";
import {JoinClasses} from "../../ui/helpers/UIHelper";

export interface IScheduleViewType {
    openAddView: () => void;
    openEditView: (schedule: Schedule) => void;
    signal?: string;
}

export function SchedulesView({openAddView, openEditView, signal = ''} : IScheduleViewType) : JSX.Element{
    const [signalTimestamp, setSignalTimestamp] = useState<string>(signal);
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoadData, setIsLoadData] = useState<boolean>(false);

    useEffect(() => {
        RequestData();
    }, [signalTimestamp, signal]);

    function UpdateSignal(signal: string) : void{ setSignalTimestamp(() => signal);}
    function EditSchedule(schedule: Schedule) : void{
        if(openEditView)
            openEditView(schedule);
    }

    function RequestData() : void {
        const promise = new Promise((resolve, reject) => {
            GetSchedulesRequest(100, resolve, reject);
        });

        promise.then((data) => {
            setIsLoadData(() => true);
            setSchedules(() => data as Schedule[]);
        }).catch(message => {
            setIsLoadData(() => true);
            setError(() => message);
        });
    }

    function RenderItems() : JSX.Element {
        if(error.length > 0){
            return <Notification color={BaseElementColor.Danger} isLightColor>{error}</Notification>
        }
        if(isLoadData){
            if(schedules.length > 0) {
                return (<>{
                    schedules.map((item, index) => {
                        return <SchedulesViewItem key={index} id={item.id} dateCreated={item.dateCreated} day={item.day}
                                                  updateSignal={UpdateSignal} editSignal={() => {EditSchedule(item);}}/>
                    })
                }</>);
            } else {
                return <Notification color={BaseElementColor.Warning} isLightColor>Нет данных для отображения</Notification>
            }
        }
        return <Notification color={BaseElementColor.Info} isLightColor>Данные загружаются...</Notification>
    }

    return <>
        <Flex justifyContent={FlexJustifyContentType.SpaceBetween} alignItems={FlexAlignItemsType.Center}>
            <div><Title text={'Ваше расписание'} size={TitleSizeType.IS4}/></div>
            <div>
                <Button type={ButtonType.IsClickableContainer} color={AdditionalElementColor.White} tooltip={'Добавить расписание'}
                        className={JoinClasses(PaddingType.P0, TooltipType.PositionLeft)} style={{width: '30px', height: '30px'}} handleClick={openAddView}>
                    <Icon icon={faCalendarPlus}/>
                </Button>
            </div>
        </Flex>
        <Line className={MarginType.MY2}/>
        {RenderItems()}
    </>
}