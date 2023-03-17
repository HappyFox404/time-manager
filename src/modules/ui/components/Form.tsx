import {ICommonUI} from "../models/ICommonUI";
import {JoinClasses} from "../helpers/UIHelper";

export interface IFormType<T> extends ICommonUI {
    handleSubmit?: (data: T) => void;
}

export function Form<T>({style, className, children, handleSubmit} : IFormType<T>){

    function formHandleSubmit(event: React.SyntheticEvent) : void {
        event.preventDefault();
        const target = event.target as typeof event.target & T;
        if(handleSubmit){
            handleSubmit(target as T);
        }
    }

    return <form style={style} className={JoinClasses('form', className ?? '')} onSubmit={formHandleSubmit}>
        {children}
    </form>
}