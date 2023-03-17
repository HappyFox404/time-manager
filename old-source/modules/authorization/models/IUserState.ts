import ITokenData from "../../../../modules/authorization/models/TokenData";

export default interface IUserState {
    tokenData : ITokenData | null;
}