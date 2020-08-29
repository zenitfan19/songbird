import React, { Component } from 'react';

import Header from './components/Header';
import BirdInfo from './components/BirdInfo';
import Answers from './components/Answers';
import NextBtn from './components/NextBtn';
import './App.scss';

export default class App extends Component {
  state = {
    currentLvl: 0,
    score: 0,
  };

  render() {
    const { currentLvl, score } = this.state;
    return (
      <div className="app">
        <Header
          currentLvl={currentLvl}
          score={score} />
        <BirdInfo isSeparate={true} />
        <Answers />
        <NextBtn />
      </div>
    );
  }
}