import {Button, MarginType, Menu, MenuLabel, MenuList, Title} from "../../ui";
import {IMenuListItemType} from "../../ui/components/elements/menu/MenuList";
import {TitleSizeType} from "../../ui/components/elements/Title";
import {AppMenuItem} from "./AppMenuItem";
import {useLocation, useNavigate} from "react-router-dom";
import {LocalStorageToken} from "../../api";
import {AppRoutes, GetPageName} from "../../../constants/AppRoutes";
import {useState} from "react";

export function AppMenu() : JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string>(GetPageName(location.pathname));

    const AppItems : IMenuListItemType[] =  [
        {
            content: <AppMenuItem text={'Расписание'} handleClick={() => {navigate(AppRoutes.Schedules);}}/>
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

    return <Menu style={{height: '94vh'}}>
        <MenuLabel><Title text={`Текущая страница: ${currentPage}`} size={TitleSizeType.IS6}/><hr className={MarginType.MY2}/></MenuLabel>
        <MenuList items={AppItems}/>
        <MenuLabel><Title text={'Пользователь'} size={TitleSizeType.IS6}/><hr className={MarginType.MY2}/></MenuLabel>
        <MenuList items={UserItems}/>
    </Menu>
}