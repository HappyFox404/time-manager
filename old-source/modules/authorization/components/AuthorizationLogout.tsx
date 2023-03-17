import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import UserStoreActions from "../models/UserStoreActions";
export function AuthorizationLogout(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        logoutUser();
    }, []);

    const logoutUser : () => void = () => {
        let isAuthorization = false;

        dispatch({type: UserStoreActions.Logout});
    };
    return (
        <div className="is-hidden"></div>
    )
}
