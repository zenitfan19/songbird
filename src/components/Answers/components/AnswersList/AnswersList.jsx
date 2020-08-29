import React from 'react';

import Indicator from './components/Indicator';
import birdsData from '../../../../constants/birds';
import './AnswersList.scss';

const AnswersList = ({ currentLvl, pickBirdClassTab }) => {
  const currentLvlOptions = birdsData[currentLvl].map((el) => {
    return (
      <li
        key={el.id}
        onClick={() => pickBirdClassTab(el.id)}>
          <Indicator />
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