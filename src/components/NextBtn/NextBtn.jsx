import React from 'react';

import './NextBtn.scss';
import maxLevel from '../../constants/maxLevel';

const NextBtn = ({ currentLvl, isSolved, incrementLvl }) => {
  const className = isSolved ? 'active' : null;
  const btnLabel = currentLvl === null ? 'Play Again' : (maxLevel - 1) === currentLvl ? 'Finish Game' : 'Next Level';
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