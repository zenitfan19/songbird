import React from 'react';

import BirdImage from './components/BirdImage';
import './BirdInfo.scss';

const BirdInfo = () => {
  return (
    <div className="app-block bird-info">
      <div className="bird-info__image">
        <BirdImage />
      </div>
      <div className="bird-info__data">
        <h2>Ворон</h2>
        <audio controls src=""></audio>
      </div>
    </div>
  );
};

export default BirdInfo;