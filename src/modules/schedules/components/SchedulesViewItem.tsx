import {
    AdditionalElementColor,
    BaseElementColor,
    Button,
    ButtonColor,
    ButtonType, CreateToast,
    Flex,
    FlexAlignItemsType,
    FlexJustifyContentType,
    Icon, JoinClasses,
    MarginType,
    PaddingType,
    TooltipType
} from "../../ui";
import {GetFormatStringDateToNormallize} from "../../helpers";
import {faFilePen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {DeleteSchedulesRequest} from "../api/DeleteSchedulesRequest";
import {Modal} from "../../ui/components/interactive/Modal";
import {useState} from "react";
import {useAppDispatch} from "../../../store/StoreHooks";
import {editViewMode, noneViewMode, setCurrentSchedule, updateTimeStamp} from "../store/SchedulesViewSlice";
import {Schedule} from "../models/Schedule";

export interface ISchedulesViewItemType {
    data: Schedule;
}

export function SchedulesViewItem({data} : ISchedulesViewItemType) : JSX.Element {
    const dispatch = useAppDispatch()
    const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
    function DeleteSchedule() {
        setIsActiveModal(() => false);

        const promise = new Promise((resolve, reject) => {
            DeleteSchedulesRequest(data.id, resolve, reject);
        });

        promise.then(() => {
            dispatch(updateTimeStamp());
            CreateToast({
                message: 'Расписание успешно удалено!',
                color: BaseElementColor.Success
            });
        }).catch(message => {
            CreateToast({
                message: message,
                color: BaseElementColor.Danger
            });
        });
    }

    function OpenEditView(){
        dispatch(setCurrentSchedule(data));
        dispatch(editViewMode());
    }

    return <>
        <Flex alignItems={FlexAlignItemsType.Center} justifyContent={FlexJustifyContentType.SpaceBetween}
              className={'schedule-item'}>
            <span>{GetFormatStringDateToNormallize(data.day)}</span>
            <Flex alignItems={FlexAlignItemsType.Center}>
                <Button type={ButtonType.IsClickableContainer} color={AdditionalElementColor.White} tooltip={'Редактировать расписание'} handleClick={OpenEditView}
                        className={JoinClasses(PaddingType.P0, MarginType.MR2, TooltipType.PositionLeft)} style={{width: '25px', height: '25px'}}>
                    <Icon icon={faFilePen} iconSize={"sm"}/>
                </Button>
                <Button type={ButtonType.IsClickableContainer} color={BaseElementColor.Danger} tooltip={'Удалить расписание'}
                        className={JoinClasses(PaddingType.P0, MarginType.MR2, TooltipType.PositionLeft)} style={{width: '25px', height: '25px'}}
                        handleClick={() => {setIsActiveModal(true); }}>
                    <Icon icon={faTrash} iconSize={"sm"}/>
                </Button>
            </Flex>
        </Flex>
        <Modal title={'Оповещение'} isActive={isActiveModal}
               handleClickApply={DeleteSchedule} handleClickClose={() => {setIsActiveModal(() => false);}}>
            <p>Вы уверены, что хотите удалить данный элемент?</p>
        </Modal>
    </>
}