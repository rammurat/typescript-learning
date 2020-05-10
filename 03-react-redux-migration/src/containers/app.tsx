import * as React from "react";
import ToDo from '../components/todo'
import { Provider } from "react-redux";
// import Filters from '../components/filters'
import {AppState} from '../store/index'
import {Store} from 'redux'

interface MainProps {
  store: Store<AppState>;
}

const App: React.FC<MainProps> = ({store}) => {
  return (
    <Provider store={store}>
      Hellos
      <ToDo />
    </Provider>
  )
}

export default App;
