export interface MyStore {
    todos: {
        id: number,
        text: string,
        completed: boolean
    }[],
    visibilityFilter: string
}

export interface todosProps {
    id: number
    text: string
    completed: boolean
}