import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export enum FlexDirectionType {
    Row = 'is-flex-direction-row',
    RowReverse = 'is-flex-direction-row-reverse',
    Column = 'is-flex-direction-column',
    ColumnReverse = 'is-flex-direction-column-reverse'
}

export enum FlexWrapType {
    NoWrap = 'is-flex-wrap-nowrap',
    Wrap = 'is-flex-wrap-wrap',
    WrapReverse = 'is-flex-wrap-wrap-reverse'
}

export enum FlexJustifyContentType {
    FlexStart = 'is-justify-content-flex-start',
    FlexEnd = 'is-justify-content-flex-end',
    Center = 'is-justify-content-center',
    SpaceBetween = 'is-justify-content-space-between',
    SpaceAround = 'is-justify-content-space-around',
    SpaceEvenly = 'is-justify-content-space-evenly',
    Start = 'is-justify-content-start',
    End = 'is-justify-content-end',
    Left = 'is-justify-content-left',
    Right = 'is-justify-content-right'
}

export enum FlexAlignContentType {
    FlexStart = 'is-align-content-flex-start',
    FlexEnd = 'is-align-content-flex-end',
    Center = 'is-align-content-center',
    SpaceBetween = 'is-align-content-space-between',
    SpaceAround = 'is-align-content-space-around',
    SpaceEvenly = 'is-align-content-space-evenly',
    Stretch = 'is-align-content-stretch',
    Start = 'is-align-content-start',
    End = 'is-align-content-end',
    Baseline = 'is-align-content-baseline'
}

export enum FlexAlignItemsType {
    Stretch = 'is-align-items-stretch',
    FlexStart = 'is-align-items-flex-start',
    FlexEnd = 'is-align-items-flex-end',
    Center = 'is-align-items-center',
    Baseline = 'is-align-items-baseline',
    Start = 'is-align-items-start',
    End = 'is-align-items-end',
    SelfStart = 'is-align-items-self-start',
    SelfEnd = 'is-align-items-self-end'
}

export interface IFlexType extends ICommonUI {
    direction?: FlexDirectionType;
    wrap?: FlexWrapType;
    justifyContent?: FlexJustifyContentType;
    alignContent?: FlexAlignContentType;
    alignItems?: FlexAlignItemsType;
}

export function Flex({className, style, children, direction, tooltip, wrap, justifyContent, alignContent, alignItems} : IFlexType) : JSX.Element {
    return <div style={style} className={JoinClasses('is-flex', className ?? '', direction ?? '',
        wrap ?? '', justifyContent ?? '', alignContent ?? '', alignItems ?? '')} data-tooltip={tooltip}>{children}</div>
}