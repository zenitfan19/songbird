import React from 'react';

import NextBtn from '../NextBtn';
import maxScore from '../../constants/maxScore';
import biologyImg from '../../assets/images/biology.png';
import './FinalWindow.scss';

const FinalWindow = ({ score, finishGame }) => {
  const superResultMsg = score === maxScore
                          ? <h3>Вы прирожденный орнитолог :)</h3>
                          : null;
  const superResultImg = score === maxScore
                          ? <img src={biologyImg} alt="biology"/>
                          : null;
  return (
    <div className="app-block final-window">
      <h1>Поздравляем!</h1>
      <h3>{`Вы прошли викторину и набрали ${score} из ${maxScore} возможных баллов`}</h3>
      {superResultMsg}
      {superResultImg}
      <NextBtn 
        currentLvl={null}
        isSolved={true}
        incrementLvl={finishGame} />
    </div>    
  );
};

export default FinalWindow;