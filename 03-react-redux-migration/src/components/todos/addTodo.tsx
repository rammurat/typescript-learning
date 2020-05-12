import React from 'react'
import { AnyAction } from "redux";
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";

import {AppState} from '../../store'
import { addToDo } from '../../store/todos/action'
import {TodoProps} from '../../store/todos/types'

interface propsFromComponent {
  total: []
}

interface propsFromDispatch {
  addToDoItem: (item: any) => any;
}

type Props = propsFromComponent & propsFromDispatch;

const AddTodoComponent: React.FC<Props> = ({ addToDoItem, total }) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const onSubmit = (e : any) => {
      e.preventDefault()

      if (!inputRef.current.value) {
        return
      }

      const newTodo: TodoProps = {
        id: total ? total.length : 0,
        text: inputRef.current.value,
        completed: false
      }

      addToDoItem(newTodo)

      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
      }
  }

  return (
    <div>
      <form onSubmit={(e) => {onSubmit(e)}}>
        <input ref={inputRef} type="text"/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ todos }: AppState) => ({
  total: todos.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    addToDoItem: (text: any) => dispatch(addToDo(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent)
