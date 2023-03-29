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
    PaddingType,JoinClasses,
    Title, TooltipType
} from "../../ui";
import {TitleSizeType} from "../../ui/components/elements/Title";
import {Schedule} from "../models/Schedule";
import {SchedulesViewItem} from "./SchedulesViewItem";
import {faArrowsRotate, faCalendarPlus} from "@fortawesome/free-solid-svg-icons";
import {useAppDispatch} from "../../../store/StoreHooks";
import {addViewMode, editViewMode, updateTimeStamp} from "../store/SchedulesViewSlice";

export interface ISchedulesView {
    schedules : Schedule[];
    error : string;
    isLoadData: boolean;
}

export function SchedulesView({schedules, error, isLoadData} : ISchedulesView) : JSX.Element{
    const dispatch = useAppDispatch();

    function OpenAddSchedule() : void{
        dispatch(addViewMode());
    }

    function RefreshSchedules() : void{
        dispatch(updateTimeStamp());
    }

    function RenderItems() : JSX.Element {
        if(error.length > 0){
            return <Notification color={BaseElementColor.Danger} isLightColor>{error}</Notification>
        }
        if(isLoadData){
            if(schedules.length > 0) {
                return (<>{
                    schedules.map((item, index) => {
                        return <SchedulesViewItem key={index} data={item}/>
                    })
                }</>);
            } else {
                return <Notification color={BaseElementColor.Warning} isLightColor>Нет данных для отображения</Notification>
            }
        }
        return <Notification color={BaseElementColor.Info} isLightColor>Данные загружаются...</Notification>
    }

    return <>
        <Flex justifyContent={FlexJustifyContentType.SpaceBetween} alignItems={FlexAlignItemsType.Center} >
            <div><Title text={'Ваше расписание'} size={TitleSizeType.IS4}/></div>
            <div>
                <Button type={ButtonType.IsClickableContainer} color={AdditionalElementColor.White} tooltip={'Добавить расписание'}
                        className={JoinClasses(PaddingType.P0, TooltipType.PositionLeft, MarginType.MR2)} style={{width: '30px', height: '30px'}} handleClick={RefreshSchedules}>
                    <Icon icon={faArrowsRotate}/>
                </Button>
                <Button type={ButtonType.IsClickableContainer} color={AdditionalElementColor.White} tooltip={'Добавить расписание'}
                        className={JoinClasses(PaddingType.P0, TooltipType.PositionLeft)} style={{width: '30px', height: '30px'}} handleClick={OpenAddSchedule}>
                    <Icon icon={faCalendarPlus}/>
                </Button>
            </div>
        </Flex>
        <Line className={MarginType.MY2}/>
        {RenderItems()}
    </>
}