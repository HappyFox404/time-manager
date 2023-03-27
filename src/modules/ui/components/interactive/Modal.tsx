import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";
import {Flex, FlexDirectionType, FlexJustifyContentType} from "../containers/Flex";
import {Line} from "../elements/Line";
import {MarginType} from "../../models/Spacing";
import {Button, ButtonType} from "./Button";
import {AdditionalElementColor} from "../../models/Colors";
import {Buttons} from "../containers/Buttons";

export interface IModalType extends ICommonUI {
    isActive:boolean;
    title: string;
    handleClickApply?: () => void;
    handleClickClose?: () => void;
}
export function Modal({className, style, children, title, isActive, handleClickApply, handleClickClose} : IModalType) : JSX.Element{
    function applyClick() {
        if(handleClickApply)
            handleClickApply();
    }
    function closeClick() {
        if(handleClickClose)
            handleClickClose();
    }

    return <div className={JoinClasses('modal', className ?? '', (isActive === true) ? 'is-active' : '')} style={style}>
        <div className={'modal-background'}></div>
        <div className={JoinClasses("modal-content", "box",)}>
            <Flex direction={FlexDirectionType.Column}>
                <span className={JoinClasses('has-text-white','is-size-4')}>{title}</span>
                <Line className={MarginType.MY1}/>
                <div className={'has-text-white'}>{children}</div>
                <Flex direction={FlexDirectionType.Row} justifyContent={FlexJustifyContentType.End}>
                    <Buttons>
                        <Button type={ButtonType.IsClickableContainer} text='Принять' color={AdditionalElementColor.White} isOutlined
                                handleClick={applyClick}/>
                        <Button type={ButtonType.IsClickableContainer} text='Закрыть' color={AdditionalElementColor.White} isOutlined
                                handleClick={closeClick}/>
                    </Buttons>
                </Flex>
            </Flex>
        </div>
    </div>
}