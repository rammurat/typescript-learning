export interface Todos {
    id: number,
    text: string,
    completed: boolean
}

export enum ToDoActionTypes {
    FETCH_REQUEST = "@@todos/FETCH_REQUEST",
    FETCH_SUCCESS = "@@todos/FETCH_SUCCESS",
    FETCH_ERROR = "@@todos/FETCH_ERROR"
}

export interface TodoState {
    readonly loading: boolean;
    readonly data: Todos[];
    readonly errors?: string;
}