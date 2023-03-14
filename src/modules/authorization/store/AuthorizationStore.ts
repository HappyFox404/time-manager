import IAuthorizationState from "../models/IUserState";
import LocalTokenStorage from "../../../core/token/LocalTokenStorage"
import UserStoreActions from "../models/UserStoreActions";
import IUserState from "../models/IUserState";
import ITokenData from "../../../core/token/ITokenData";
import TokenLocalStorage from "../../../core/token/LocalTokenStorage";
import {legacy_createStore as createStore} from "redux";

export interface IStoreAction{
    type: UserStoreActions;
    data: ITokenData;
}

const defaultUserState : IUserState = {
    tokenData: new LocalTokenStorage().getStorage(),
}

export const userStore = createStore(userReducer, defaultUserState);

function userReducer(state : IUserState = defaultUserState, action : IStoreAction){
    switch (action.type){
        case UserStoreActions.Authorize:{
            try{
                new TokenLocalStorage().saveStorage(action.data);
                return {...state, tokenData: action.data}
            } catch (e){
                console.error(`State not change: ${e}`);
                return state;
            }
        }
        case UserStoreActions.Logout:{
            try{
                new TokenLocalStorage().saveStorage({isAuthorization: false} as ITokenData);
                return {...state, tokenData: {isAuthorization: false} as ITokenData}
            } catch (e){
                console.error(`State not change: ${e}`);
                return state;
            }
        }
        default:
            return state;
    }
}