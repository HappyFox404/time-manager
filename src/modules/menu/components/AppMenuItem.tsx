import {Button, ButtonType, JoinClasses, Title} from "../../ui";

export interface IAppMenuItemType {
    text: string;
    handleClick?: () => void;
}

export function AppMenuItem({text, handleClick} : IAppMenuItemType) : JSX.Element{
    return <Button className={JoinClasses('app-menu-item')} handleClick={handleClick} type={ButtonType.IsClickableContainer} isEmpty>
        {text}
    </Button>
}