import React from 'react';

import Header from './components/Header';
import BirdInfo from './components/BirdInfo';
import Answers from './components/Answers';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <BirdInfo isSeparate={true} />
      <Answers />
    </div>
  );
}

export default App;