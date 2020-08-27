import React from 'react';

import BirdImage from './components/BirdImage';
import './BirdInfo.scss';

const BirdInfo = ({ isSeparate }) => {
  const bridInfoClass = isSeparate ? 'app-block bird-info' : 'bird-info bird-info_small';
  const birdLatinName = !isSeparate ? <h3>Corvus corax</h3> : null;
  const birdDescription = !isSeparate ? <div className='bird-text'>Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.</div> : null;

  return (
    <div className={bridInfoClass}>
      <div className="bird-info__image">
        <BirdImage />
      </div>
      <div className="bird-info__data">
        <h2>Ворон</h2>
        {birdLatinName}
        <audio controls src=""></audio>
      </div>
      {birdDescription}
    </div>
  );
};

export default BirdInfo;