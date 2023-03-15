import ITokenData from "./ITokenData";

export default interface ITokenStorage {
    saveStorage: (tokenData: ITokenData) => void;
    getStorage: () => ITokenData | null;
}