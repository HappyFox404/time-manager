import ITokenData from "./interfaces/ITokenData";
import ITokenStorage from "./interfaces/ITokenStorage";

export default class TokenLocalStorage implements ITokenStorage {

    saveStorage(tokenData: ITokenData): void {
        localStorage.setItem('userToken', tokenData.token);
        localStorage.setItem('userRefreshToken', tokenData.refreshToken);
        localStorage.setItem('userIsAuthorization', String(tokenData.isAuthorization));
    }
    
    getStorage(): ITokenData | null {
        if (localStorage.getItem('userToken') !== null &&
            localStorage.getItem('userRefreshToken') !== null &&
            localStorage.getItem('uuserIsAuthorization') != null) {
            const isAuthorization : boolean = Boolean(localStorage.getItem('userIsAuthorization'));
            
            const userData : ITokenData = {
                token: localStorage.getItem('userToken') ?? '', 
                refreshToken: localStorage.getItem('userRefreshToken') ?? '', 
                isAuthorization: isAuthorization
            };

            return userData;
        }

        return null;
    }

}