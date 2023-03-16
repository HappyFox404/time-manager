import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";

export function CardContent({className, style, children} : ICommonUI) : JSX.Element {
    return <div style={style} className={JoinClasses('card-content', className ?? '')}>
        {children}
    </div>
}