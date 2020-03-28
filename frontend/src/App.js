/**
 * Código comentado é para teste
 */
/*
import React, { useState } from 'react';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    //<Header title="Semana OmniStack" />
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}*/
import React from 'react';

import './global.css';

//import Logon from './pages/Logon';
import Routes from './routes';

function App() {
  return (
    //<Logon />
    <Routes />
  );
}

export default App;