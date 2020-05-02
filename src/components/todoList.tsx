import * as React from "react";
import Todo from './Todo'

type Props = {
  todos: Array<object>,
  toggleTodo: () => void
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
