import React from 'react';
import './App.css';

import {Home} from './home'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Home compiler="sdas" framework={12}/>
    </div>
  );
}

export default App;
