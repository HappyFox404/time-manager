import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export enum ColumnSize {
    P100 = 'is-full',
    P90 = 'is-four-fifths',
    P80 = 'is-three-quarters',
    P70 = 'is-two-thirds',
    P60 = 'is-three-fifths',
    P50 = 'is-half',
    P40 = 'is-two-fifths',
    P30 = 'is-one-third',
    P20 = 'is-one-quarter',
    P10 = 'is-one-fifth',
    IS1 = 'is-1',
    IS2 = 'is-2',
    IS3 = 'is-3',
    IS4 = 'is-4',
    IS5 = 'is-5',
    IS6 = 'is-6',
    IS7 = 'is-7',
    IS8 = 'is-8',
    IS9 = 'is-9',
    IS10 = 'is-10',
    IS11 = 'is-11',
    IS12 = 'is-12',
}

export interface IColumnType extends ICommonUI {
    size?: ColumnSize;
    isNarrow?: boolean;
}

export function Column({className, style, children, size, isNarrow = false} : IColumnType) : JSX.Element {
    return (<div
        style={style}
        className={JoinClasses('column', className ?? '', size ?? '', (isNarrow === true) ? 'is-narrow' : '')}>
        {children}
    </div>);
}