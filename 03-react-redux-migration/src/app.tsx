import * as React from "react";
import ToDos from './components/todos/index'
import AddTodo from './components/todos/addTodo'
import { Provider } from "react-redux";
import {AppState} from './store/index'
import {Store} from 'redux'

interface MainProps {
  store: Store<AppState>;
}

const App: React.FC<MainProps> = ({store}) => {
  return (
    <Provider store={store}>
      <AddTodo />
      <ToDos />
    </Provider>
  )
}

export default App;
