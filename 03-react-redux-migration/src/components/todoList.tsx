import * as React from "react";
import Todo from './todo'

type Props = {
  todos: {
    id: number;
    text: string; 
    completed: boolean
  }[],
  toggleTodo: () => number
}

const TodoList = ({ todos, toggleTodo }: Props) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
