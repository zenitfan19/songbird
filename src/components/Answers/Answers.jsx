import React from 'react';

import AnswersList from './components/AnswersList';
import AnswerDescription from './components/AnswerDescription';
import './Answers.scss';

const Answers = ({ currentLvl, currentPickedTab, pickBirdClassTab, userAnswers }) => {
  if (userAnswers !== null) {
    return (
      <div className="app-block answers">
        <AnswersList
          currentLvl={currentLvl}
          pickBirdClassTab={pickBirdClassTab}
          userAnswers={userAnswers} />
        <AnswerDescription
          currentPickedTab={currentPickedTab}
          currentLvl={currentLvl} />
      </div>
    );
  }
  return (
    <h1>Loading...</h1>
  );
};

export default Answers;