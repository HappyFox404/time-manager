import {Button, MarginType, Menu, MenuLabel, MenuList, Title} from "../../ui";
import {IMenuListItemType} from "../../ui/components/elements/menu/MenuList";
import {TitleSizeType} from "../../ui/components/elements/Title";
import {AppMenuItem} from "./AppMenuItem";
import {useNavigate} from "react-router-dom";
import {LocalStorageToken} from "../../api";

export function AppMenu() : JSX.Element {
    const navigate = useNavigate();

    const AppItems : IMenuListItemType[] =  [
        {
            content: <AppMenuItem text={'Расписание'}/>
        },
        {
            content: <AppMenuItem text={'Временные метки'}/>
        }
    ];

    const UserItems : IMenuListItemType[] =  [
        {
            content: <AppMenuItem text={'Выход'} handleClick={() => {
                new LocalStorageToken().ClearStorage();
                window.location.reload();
            }}/>
        }
    ];

    return <Menu style={{height: '95vh'}}>
        <MenuLabel><Title text={'Приложение'} size={TitleSizeType.IS6}/><hr className={MarginType.MY2}/></MenuLabel>
        <MenuList items={AppItems}/>
        <MenuLabel><Title text={'Пользователь'} size={TitleSizeType.IS6}/><hr className={MarginType.MY2}/></MenuLabel>
        <MenuList items={UserItems}/>
    </Menu>
}