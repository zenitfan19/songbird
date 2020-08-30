import React from 'react';

import './Indicator.scss';

const Indicator = ({ isRight }) => {
  const className = isRight === null 
                      ? 'indicator' 
                      : isRight 
                        ? 'indicator right'
                        : 'indicator wrong';
  return (
    <div className={className}></div>
  );
};

export default Indicator;