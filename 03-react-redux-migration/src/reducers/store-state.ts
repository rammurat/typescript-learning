const visibilityFilter: string = "SHOW_ALL"
const todos: {id:number, text: string, completed: boolean} [] = []
type StoreState = {
    todos: {
        id:number;
        text: string;
        completed: boolean
    }[]
    visibilityFilter: string
}

export const initialState : StoreState = {
    todos,
    visibilityFilter
}