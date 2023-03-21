import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";
import {Button} from "./Button";
import {BaseElementColor} from "../../models/Colors";
import {useState} from "react";

export interface IModalType extends ICommonUI {
    isActive:boolean;
    title: string;
    handleClickApply?: () => void;
    handleClickClose?: () => void;
}
export function Modal({className, style, children, title, isActive, handleClickApply, handleClickClose} : IModalType) : JSX.Element{
    const [active, setActive] = useState<boolean>(isActive);
    console.log('modal',active);
    function applyClick() {
        setActive(() => false);
        if(handleClickApply)
            handleClickApply();
    }
    function closeClick() {
        setActive(() => false);
        if(handleClickClose)
            handleClickClose();
    }

    return <div className={JoinClasses('modal', className ?? '', (active === true) ? 'is-active' : '')} style={style}>
        <div className={'modal-background'}></div>
        <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
        </header>
        <section className="modal-card-body">
            {children}
        </section>
        <footer className="modal-card-foot">
            <Button color={BaseElementColor.Success} handleClick={applyClick}>Применить</Button>
            <Button handleClick={closeClick}>Закрыть</Button>
        </footer>
    </div>
}