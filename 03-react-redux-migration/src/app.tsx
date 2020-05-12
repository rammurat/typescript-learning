import * as React from "react";
import {Store} from 'redux'
import { Provider } from "react-redux";

import ToDos from './components/todos/index'
import AddTodo from './components/todos/addTodo'
import {AppState} from './store/index'

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
