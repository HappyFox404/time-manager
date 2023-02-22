export interface IFormValidate {
    isValid: (state: boolean) => boolean;
}

export interface IFormSubmit {
    submit: () => void;
}