import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";
export interface ITableType extends ICommonUI {
    isBordered?:boolean;
    isStripes?:boolean;
    isNarrow?:boolean;
    isHoverable?:boolean;
    isFullWidth?:boolean;
    isNeedContainer?:boolean;
}

export function Table({className, style, children, isBordered = false, isStripes = false,
                      isNarrow = false, isHoverable = false, isFullWidth = false, isNeedContainer = false} : ITableType) : JSX.Element {
    function TableElement() : JSX.Element{
        return <table style={style} className={JoinClasses('table', className ?? '',
            (isBordered) ? 'is-bordered' : '', (isStripes) ? 'is-striped' : '', (isNarrow) ? 'is-narrow' : '',
            (isHoverable) ? 'is-hoverable' : '', (isFullWidth) ? 'is-fullwidth' : '')}>
            {children}
        </table>
    }

    if(isNeedContainer){
        return <div className='table-container'>{TableElement()}</div>
    } else {
        return TableElement()
    }
}