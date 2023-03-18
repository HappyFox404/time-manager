import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export function Line({className, style} : ICommonUI) : JSX.Element {
    return <hr className={JoinClasses(className ?? '', 'line')} style={style}/>
}