import ITokenData from "./ITokenData";

export interface IApplicationState {
    tokenData : ITokenData | null;
}

enum ApplicationStateActions{
    Authorize = "SetAuthorization",
    Logout = "RemoveAuthorization"
}

export default ApplicationStateActions;