export interface FilterProps {
    showAll: boolean
}

export interface FilterState {
    readonly showAll: boolean
}

export enum FiltersActionTypes {
    SHOW_ALL = "@@todos/SHOW_ALL"
}