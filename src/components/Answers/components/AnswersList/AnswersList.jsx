import React from 'react';

import Indicator from './components/Indicator';
import './AnswersList.scss';

const AnswersList = () => {
  return (
    <div className="answer-block answers-list">
        <ul>
          <li>
            <Indicator />
            Ворон
          </li>
          <li>
            <Indicator />
            Журавль
          </li>
          <li>
            <Indicator />
            Ласточка
          </li>
          <li>
            <Indicator />
            Козодой
          </li>
          <li>
            <Indicator />
            Кукушка
          </li>
          <li>
            <Indicator />
            Синица
          </li>
        </ul>
    </div>
  );
};

export default AnswersList;