import React from 'react';

import './NextBtn.scss';
import birdClasses from '../../constants/birdClasses';

const NextBtn = ({ currentLvl, isSolved, incrementLvl }) => {
  const className = isSolved ? 'active' : null;
  const btnLabel = (birdClasses.length - 1) === currentLvl ? 'Finish Game' : 'Next Level';
  return (
    <button
      className={className} 
      type="button"
      onClick={incrementLvl}>
        {btnLabel}
    </button>
  );
};

export default NextBtn;