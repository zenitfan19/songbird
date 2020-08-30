import React from 'react';

import BirdImage from './components/BirdImage';
import birdsData from '../../constants/birds';
import defaultImage from  '../../assets/images/bird.png';
import './BirdInfo.scss';

const BirdInfo = ({ isSeparate, isSolved, currentLvl, birdId }) => {
  if (birdId !== null) {
    const [ bird ] = birdsData[currentLvl].filter((el) => el.id === birdId);  
    const bridInfoClass = isSeparate ? 'app-block bird-info' : 'bird-info bird-info_small';
    const birdLatinName = !isSeparate ? <h3>{bird.species}</h3> : null;
    const birdDescription = !isSeparate ? <div className='bird-text'>{bird.description}</div> : null;
    const birdImg = isSeparate ? (isSolved ? bird.image : defaultImage) : bird.image;  
    const birdName = isSeparate ? (isSolved ? bird.name : '*****') : bird.name;
    const birdSound = <audio controls src={bird.audio}></audio>;
    
    return (
      <div className={bridInfoClass}>
        <div className="bird-info__image">
          <BirdImage imageSrc={birdImg} />
        </div>
        <div className="bird-info__data">
          <h2>{birdName}</h2>
          {birdLatinName}
          {birdSound}
        </div>
        {birdDescription}
      </div>
    );
  }
  return (
    <h1>Loading...</h1>
  );
};

export default BirdInfo;