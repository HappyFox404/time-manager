import {ITokenData} from "./ITokenData";

export interface ITokenProvider {
    SaveStorage: (tokenData: ITokenData) => void;
    GetStorage: () => ITokenData | null;
    ClearStorage: () => void;
}