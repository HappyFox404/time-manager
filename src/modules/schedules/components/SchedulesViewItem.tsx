import {Box, Flex, FlexAlignItemsType} from "../../ui";
import {GetFormatStringDateToNormallize} from "../../helpers";

export interface ISchedulesViewItemType {
    id: string;
    dateCreated: string;
    day: string;
}

export function SchedulesViewItem({id, day, dateCreated} : ISchedulesViewItemType) : JSX.Element {
    return <Flex alignItems={FlexAlignItemsType.Center} className={'schedule-item'}>
        <span>{GetFormatStringDateToNormallize(day)}</span>
    </Flex>
}