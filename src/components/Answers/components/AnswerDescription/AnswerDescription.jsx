import React from 'react';

import BirdInfo from '../../../BirdInfo';
import './AnswerDescription.scss'

const AnswerDescription = () => {
  return (
    <div className="answer-block answer-description">
      <BirdInfo isSeparate={false} />
    </div>
  );
};

export default AnswerDescription;