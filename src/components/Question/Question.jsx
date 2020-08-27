import React from 'react';

import BirdImage from '../BirdImage';
import './Question.scss';

const Question = () => {
  return (
    <div className="app-block question">
      <div className="question-image">
        <BirdImage />
      </div>
      <div className="question-info">
        <h2>Ворон</h2>
        <audio controls src=""></audio>
      </div>
    </div>
  );
};

export default Question;