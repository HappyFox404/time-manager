import ITokenStorage from "./ITokenStorage";
import ITokenData from "./ITokenData";

export default class TokenLocalStorage implements ITokenStorage {
    private readonly _userToken : string = "userToken";
    private readonly _userRefreshToken : string = "userRefreshToken";
    private readonly _userIsAuthorization : string = "userIsAuthorization";

    saveStorage(tokenData: ITokenData): void {
        localStorage.setItem(this._userToken, tokenData.token);
        localStorage.setItem(this._userRefreshToken, tokenData.refreshToken);
        localStorage.setItem(this._userIsAuthorization, String(tokenData.isAuthorization));
    }

    getStorage(): ITokenData | null {
        if (localStorage.getItem(this._userToken) !== null &&
            localStorage.getItem(this._userRefreshToken) !== null &&
            localStorage.getItem(this._userIsAuthorization) != null) {
            const isAuthorization : boolean = localStorage.getItem(this._userIsAuthorization) === 'true' ? true : false;

            const userData : ITokenData = {
                token: localStorage.getItem(this._userToken) ?? '',
                refreshToken: localStorage.getItem(this._userRefreshToken) ?? '',
                isAuthorization: isAuthorization
            };

            return userData;
        }

        return null;
    }

}