import React from 'react';

import Indicator from './components/Indicator';
import birdsData from '../../../../constants/birds';
import './AnswersList.scss';

const AnswersList = ({ currentLvl, pickBirdClassTab, userAnswers }) => { 
  const { answers } = userAnswers; 
  const currentLvlOptions = birdsData[currentLvl].map((el) => {
    const { isRight } = answers[currentLvl].find((answer) => answer.id === el.id);    
    return (
      <li
        key={el.id}
        onClick={() => pickBirdClassTab(el.id)}>
          <Indicator isRight={isRight} />
          {el.name}
      </li>
    );
  });
  return (
    <div className="answer-block answers-list">
        <ul>
          {currentLvlOptions}
        </ul>
    </div>
  );
};

export default AnswersList;