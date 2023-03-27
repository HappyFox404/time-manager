import {
    AdditionalElementColor,
    BaseElementColor,
    Button,
    ButtonColor,
    ButtonType,
    Flex,
    FlexAlignItemsType,
    FlexJustifyContentType,
    Icon,
    MarginType,
    PaddingType,
    TooltipType
} from "../../ui";
import {GetFormatStringDateToNormallize} from "../../helpers";
import {faFilePen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {JoinClasses} from "../../ui/helpers/UIHelper";
import {DeleteSchedulesRequest} from "../api/DeleteSchedulesRequest";
import {toast} from "bulma-toast";
import {Modal} from "../../ui/components/interactive/Modal";
import {useState} from "react";

export interface ISchedulesViewItemType {
    id: string;
    dateCreated: string;
    day: string;
    updateSignal: (signal: string) => void;
    editSignal: () => void;
}

export function SchedulesViewItem({id, day, dateCreated, updateSignal, editSignal} : ISchedulesViewItemType) : JSX.Element {
    const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
    function DeleteSchedule() {
        setIsActiveModal(() => false);

        const promise = new Promise((resolve, reject) => {
            DeleteSchedulesRequest(id, resolve, reject);
        });

        promise.then(() => {
            if(updateSignal)
                updateSignal(new Date().getTime().toString());
            toast({
                message: 'Расписание успешно удалено!',
                type: BaseElementColor.Success,
                position: "bottom-right",
                dismissible: true,
                closeOnClick: true
            })
        }).catch(message => {
            toast({
                message: message,
                type: BaseElementColor.Danger,
                position: "bottom-right",
                dismissible: true,
                closeOnClick: true
            })
        });
    }

    return <>
        <Flex alignItems={FlexAlignItemsType.Center} justifyContent={FlexJustifyContentType.SpaceBetween}
              className={'schedule-item'}>
            <span>{GetFormatStringDateToNormallize(day)}</span>
            <Flex alignItems={FlexAlignItemsType.Center}>
                <Button type={ButtonType.IsClickableContainer} color={AdditionalElementColor.White} tooltip={'Редактировать расписание'} handleClick={() => {if(editSignal) editSignal();}}
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