import React, { Component } from 'react';

import Header from './components/Header';
import BirdInfo from './components/BirdInfo';
import Answers from './components/Answers';
import NextBtn from './components/NextBtn';
import FinalWindow from './components/FinalWindow';
import guessBird from './utils/guessBird';
import UserAnswers from './utils/userAnswers';
import maxLevel from './constants/maxLevel';
import correctAudioFile from './constants/correctAudio';
import incorrectAudioFile from './constants/incorrectAudio';
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
    const { isSolved, currentLvl } = this.state;
    if (isSolved && currentLvl !== (maxLevel - 1)) {
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
    } else if (isSolved) {
      this.setState(({ currentLvl }) => {
        const nextLvl = currentLvl + 1;
        return {
          currentLvl: nextLvl
        };
      });
    }
  };

  finishGame = () => {
    const guessedBirdId = guessBird(0);
    const userAnswers = new UserAnswers();
    this.setState({
      currentLvl: 0,
      score: 0,
      isSolved: false,
      currentPickedTab: null,
      guessedBirdId,
      userAnswers
    });
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
        correctAudioFile.play();
      } else {
        incorrectAudioFile.play();
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

    this.setState({
      guessedBirdId,
      userAnswers
    });
  }

  render() {
    const { currentLvl, score, isSolved, currentPickedTab, guessedBirdId, userAnswers } = this.state;
    const isMaxLvl = currentLvl === maxLevel;

    const header =  !isMaxLvl
                      ? <Header
                          currentLvl={currentLvl}
                          score={score} />
                      : <Header
                          currentLvl={currentLvl - 1}
                          score={score} />
    const question = !isMaxLvl 
                      ? <BirdInfo
                          isSeparate={true}
                          isSolved={isSolved}
                          currentLvl={currentLvl}
                          birdId={guessedBirdId} />
                      : null;
    const answers = !isMaxLvl 
                      ? <Answers
                          currentLvl={currentLvl}          
                          currentPickedTab={currentPickedTab}
                          userAnswers={userAnswers}
                          pickBirdClassTab={this.pickBirdClassTab} />
                      : null;
    const nextBtn = !isMaxLvl
                      ? <NextBtn
                          currentLvl={currentLvl}
                          isSolved={isSolved}
                          incrementLvl={this.incrementLvl} />
                      : null;
    const finalWindow = isMaxLvl
                          ? <FinalWindow
                              score={score}
                              finishGame={this.finishGame} />
                          : null;
    
    return (
      <div className="app">
        {header}
        {question}
        {answers}
        {nextBtn}
        {finalWindow}
      </div>
    );
  }
}