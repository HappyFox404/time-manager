import {
    BaseElementColor,
    Button,
    ButtonType,
    Flex,
    FlexAlignItemsType,
    FlexJustifyContentType,
    Icon,
    MarginType,
    PaddingType, TooltipType
} from "../../ui";
import {GetFormatStringDateToNormallize} from "../../helpers";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {JoinClasses} from "../../ui/helpers/UIHelper";
import {DeleteSchedulesRequest} from "../api/DeleteSchedulesRequest";
import {toast} from "bulma-toast";

export interface ISchedulesViewItemType {
    id: string;
    dateCreated: string;
    day: string;
    updateSignal: (signal: string) => void;
}

export function SchedulesViewItem({id, day, dateCreated, updateSignal} : ISchedulesViewItemType) : JSX.Element {
    function DeleteSchedule() {
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

    return <Flex alignItems={FlexAlignItemsType.Center} justifyContent={FlexJustifyContentType.SpaceBetween} className={'schedule-item'}>
        <span>{GetFormatStringDateToNormallize(day)}</span>
        <Flex alignItems={FlexAlignItemsType.Center}>
            <Button type={ButtonType.IsClickableContainer} color={BaseElementColor.Danger} tooltip={'Удалить расписание'} handleClick={DeleteSchedule}
                    className={JoinClasses(PaddingType.P0, MarginType.MR2, TooltipType.PositionLeft)} style={{width: '25px', height: '25px'}}>
                <Icon icon={faTrash} iconSize={"sm"}/>
            </Button>
        </Flex>
    </Flex>
}