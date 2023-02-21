enum UserDataKeys{
    Token = "user_token",
    RefreshToken = "user_refresh_token",
}

interface UserData {
    Token: string,
    RefreshToken: string,
    IsAuthorization: boolean
}

export function GetUserData() : UserData {
    const token: string = localStorage.getItem(UserDataKeys.Token);
    const refreshToken: string = localStorage.getItem(UserDataKeys.RefreshToken);

    const data : UserData = {
        Token : (token !== null || token.replace(/\s/g, "") === '') ? token : "",
        RefreshToken: (refreshToken !== null || refreshToken.replace(/\s/g, "") === '') ? refreshToken : "",
        IsAuthorization: ((token === null || token.replace(/\s/g, "")  === '') ||
            (refreshToken === null || token.replace(/\s/g, "")  === '')) ? false : true
    };
    return data;
}

export function SetUserData(token: string, refreshToken: string) : void {
    localStorage.setItem(UserDataKeys.Token, token);
    localStorage.setItem(UserDataKeys.RefreshToken, refreshToken);
}