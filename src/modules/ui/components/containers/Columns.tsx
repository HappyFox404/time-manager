import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export enum ColumnsGap {
    GAP0 = 'is-0',
    GAP1 = 'is-1',
    GAP2 = 'is-2',
    GAP3 = 'is-3',
    GAP4 = 'is-4',
    GAP5 = 'is-5',
    GAP6 = 'is-6',
    GAP7 = 'is-7',
    GAP8 = 'is-8'
}

export interface IColumnsType extends ICommonUI {
    gap?: ColumnsGap;
    isGapless?: boolean;
    isMultiline?:boolean;
    isVerticalCentered?: boolean;
    isCentered?: boolean;
}

export function Columns({className, style, children, gap, isGapless = false, isMultiline = false, isVerticalCentered = false, isCentered = false} : IColumnsType) : JSX.Element {
    return (<div
        style={style}
        className={JoinClasses('columns', className ?? '', gap ?? '',
            (isGapless === true) ? 'is-gapless' : '', (isMultiline === true) ? 'is-multiline' : '',
            (isVerticalCentered === true) ? 'is-vcentered' : '', (isCentered === true) ? 'is-centered' : '')}>
        {children}
    </div>);
}