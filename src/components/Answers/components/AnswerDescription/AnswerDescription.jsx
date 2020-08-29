import React from 'react';

import BirdInfo from '../../../BirdInfo';
import defaultDescription from '../../../../constants/defaultDescriptionMsg'
import './AnswerDescription.scss'

const AnswerDescription = ({ currentPickedTab, currentLvl }) => {
  const description = currentPickedTab === null 
                      ? defaultDescription
                      : <BirdInfo 
                          isSeparate={false}
                          currentLvl={currentLvl}
                          birdId={currentPickedTab} />;
  return (
    <div className="answer-block answer-description">
      {description}
    </div>
  );
};

export default AnswerDescription;