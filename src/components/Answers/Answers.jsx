import React from 'react';

import AnswersList from './components/AnswersList';
import AnswerDescription from './components/AnswerDescription';
import './Answers.scss';

const Answers = ({ currentLvl, currentPickedTab, pickBirdClassTab }) => {
  return (
    <div className="app-block answers">
      <AnswersList
        currentLvl={currentLvl}
        pickBirdClassTab={pickBirdClassTab} />
      <AnswerDescription
        currentPickedTab={currentPickedTab}
        currentLvl={currentLvl} />
    </div>
  );
};

export default Answers;