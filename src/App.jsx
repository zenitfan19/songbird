import React from 'react';

import Header from './components/Header';
import BirdInfo from './components/BirdInfo';
import Answers from './components/Answers';
import NextBtn from './components/NextBtn';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <BirdInfo isSeparate={true} />
      <Answers />
      <NextBtn />
    </div>
  );
}

export default App;