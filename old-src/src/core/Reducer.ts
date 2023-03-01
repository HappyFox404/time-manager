import ApplicationStateActions, {IApplicationState} from "./interfaces/IApplicationState";
import TokenLocalStorage from "./TokenLocalStorage";
import ITokenData from "./interfaces/ITokenData";

const defaultApplicationState : IApplicationState = {
    tokenData: new TokenLocalStorage().getStorage(),
}

const reducer = (state : IApplicationState = defaultApplicationState, action : any) => {
    switch (action.type){
        case ApplicationStateActions.Authorize:{
            try{
                new TokenLocalStorage().saveStorage(action.tokenData);
                return {...state, tokenData: action.tokenData}
            } catch (e){
                console.error(`State not change: ${e}`);
                return state;
            }
        }
        case ApplicationStateActions.Logout:{
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

export default reducer;