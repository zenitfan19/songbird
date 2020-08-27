import React from 'react';

import Header from './components/Header';
import Question from './components/Question';
import Answers from './components/Answers';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Question />
      <Answers />
    </div>
  );
}

export default App;