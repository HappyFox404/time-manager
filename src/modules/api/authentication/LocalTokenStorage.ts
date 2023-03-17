import {ITokenProvider} from "./ITokenProvider";
import {ITokenData} from "./ITokenData";

export class LocalStorageToken implements ITokenProvider {
    private readonly _userToken : string = "userToken";
    private readonly _userRefreshToken : string = "userRefreshToken";
    private readonly _userIsAuthorization : string = "userIsAuthorization";

    SaveStorage(tokenData: ITokenData): void {
        localStorage.setItem(this._userToken, tokenData.token);
        localStorage.setItem(this._userRefreshToken, tokenData.refreshToken);
        localStorage.setItem(this._userIsAuthorization, String(tokenData.isAuthorization));
    }

    GetStorage(): ITokenData | null {
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

    ClearStorage() : void {
        localStorage.removeItem(this._userToken);
        localStorage.removeItem(this._userRefreshToken);
        localStorage.removeItem(this._userIsAuthorization);
    }

}