import React from 'react';

import Routes from './routes';
import Header from './components/header/Header';

import './App.css';
import './style.css'
import Rodape from './components/rodape/Rodape';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes />
      <Rodape/>
    </div>
  );
}

export default App;
