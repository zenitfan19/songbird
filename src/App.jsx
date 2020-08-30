import React, { Component } from 'react';

import Header from './components/Header';
import BirdInfo from './components/BirdInfo';
import Answers from './components/Answers';
import NextBtn from './components/NextBtn';
import guessBird from './utils/guessBird';
import UserAnswers from './utils/userAnswers';
import './App.scss';

export default class App extends Component {
  state = {
    currentLvl: 0,
    score: 0,
    isSolved: false,
    currentPickedTab: null,
    guessedBirdId: null,
    userAnswers: null
  };

  incrementLvl = () => {
    const { isSolved } = this.state;
    if (isSolved) {
      this.setState(({ currentLvl }) => {
        const nextLvl = currentLvl + 1;
        const guessedBirdId = guessBird(nextLvl);
        return {
          currentLvl: nextLvl,
          currentPickedTab: null,
          isSolved: false,
          guessedBirdId
        };
      });
    }
  };

  pickBirdClassTab = (id) => {
    const { isSolved, userAnswers, currentLvl, score } = this.state;
    const checkAnswer = !isSolved ? this.checkAnswer(id) : true;
    let newScore = score;

    if (!isSolved) {
      userAnswers.setAnswer(currentLvl, id, checkAnswer);
      if (checkAnswer) {
        const wrongAnswers = userAnswers.countWrongAnswers(currentLvl);
        newScore += (5 - wrongAnswers);
      } 
    }

    this.setState({
      currentPickedTab: id,
      isSolved: checkAnswer,
      score: newScore
    });
  };

  checkAnswer(id) {
    const { guessedBirdId } = this.state;
    return id === guessedBirdId;
  }

  componentDidMount() {
    const { currentLvl } = this.state;
    const guessedBirdId = guessBird(currentLvl);
    const userAnswers = new UserAnswers();

    console.log(userAnswers);

    this.setState({
      guessedBirdId,
      userAnswers
    });
  }

  render() {
    const { currentLvl, score, isSolved, currentPickedTab, guessedBirdId, userAnswers } = this.state;    
    return (
      <div className="app">
        <Header
          currentLvl={currentLvl}
          score={score} />
        <BirdInfo
          isSeparate={true}
          isSolved={isSolved}
          currentLvl={currentLvl}
          birdId={guessedBirdId} />
        <Answers
          currentLvl={currentLvl}          
          currentPickedTab={currentPickedTab}
          userAnswers={userAnswers}
          pickBirdClassTab={this.pickBirdClassTab} />
        <NextBtn
          currentLvl={currentLvl}
          isSolved={isSolved}
          incrementLvl={this.incrementLvl} />
      </div>
    );
  }
}