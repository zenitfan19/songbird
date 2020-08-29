import React from 'react';

import birdClasses from '../../../../constants/birdClasses';
import './Tabs.scss'

const Tabs = ({ currentLvl }) => {
  const birdClassListItems = birdClasses.map((el) => {
    const className = el.id === currentLvl ? 'active': null;

    return (
      <li className={className}>{el.name}</li>
    );
  });

  return (
    <ul className='tabs'>
      {birdClassListItems}
    </ul>
  );
};

export default Tabs;