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
    isSolved: false,
    currentPickedTab: null
  };

  incrementLvl = () => {
    const { isSolved } = this.state;
    if (isSolved) {
      this.setState(({ currentLvl }) => {
        return {
          currentLvl: currentLvl + 1,
          currentPickedTab: null
        };
      });
    }
  };

  pickBirdClassTab = (id) => {
    this.setState({
      currentPickedTab: id
    });
  };

  render() {
    const { currentLvl, score, isSolved, currentPickedTab } = this.state;
    return (
      <div className="app">
        <Header
          currentLvl={currentLvl}
          score={score} />
        <BirdInfo
          isSeparate={true}
          isSolved={isSolved}
          currentLvl={currentLvl}
          birdId={1} />
        <Answers
          currentLvl={currentLvl}          
          currentPickedTab={currentPickedTab}
          pickBirdClassTab={this.pickBirdClassTab} />
        <NextBtn
          currentLvl={currentLvl}
          isSolved={isSolved}
          incrementLvl={this.incrementLvl} />
      </div>
    );
  }
}