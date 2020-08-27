import React from 'react';

import AnswersList from './components/AnswersList';
import AnswerDescription from './components/AnswerDescription';
import './Answers.scss';

const Answers = () => {
  return (
    <div className="app-block answers">
      <AnswersList />
      <AnswerDescription />
    </div>
  );
};

export default Answers;