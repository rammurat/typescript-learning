export interface TodoProps {
    id: number,
    text: string,
    completed: boolean
}

export enum ToDoActionTypes {
    FETCH_REQUEST = "@@todos/FETCH_REQUEST",
    FETCH_SUCCESS = "@@todos/FETCH_SUCCESS",
    FETCH_ERROR = "@@todos/FETCH_ERROR",
    ADD_TODO = "@@todos/ADD_TODO"
}

export interface TodoState {
    readonly loading: boolean;
    readonly data: TodoProps[];
    readonly errors?: string;
}