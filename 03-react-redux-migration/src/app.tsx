import * as React from "react";
import ToDos from './components/todos/index'
import { Provider } from "react-redux";
import {AppState} from './store/index'
import {Store} from 'redux'

interface MainProps {
  store: Store<AppState>;
}

const App: React.FC<MainProps> = ({store}) => {
  return (
    <Provider store={store}>
      <ToDos />
    </Provider>
  )
}

export default App;
