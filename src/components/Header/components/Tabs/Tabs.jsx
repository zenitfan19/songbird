import React from 'react';

import './Tabs.scss'

const Tabs = () => {
  return (
    <ul className='tabs'>
      <li className='active'>Известные</li>
      <li>Воробьиные</li>
      <li>Лесные птицы</li>
      <li>Певчие птицы</li>
      <li>Хищные птицы</li>
      <li>Морские птицы</li>
    </ul>
  );
};

export default Tabs;