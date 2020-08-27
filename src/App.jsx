import React from 'react';

import Header from './components/Header';
import Question from './components/Question';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Question />
    </div>
  );
}

export default App;