export interface Schedule {
    id: string;
    dateCreated: string;
    day: string;
    userId: string;
}

const defaultState : Schedule = { id: "",dateCreated: "",day: "",userId: ""}

export {defaultState}