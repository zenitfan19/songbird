import React from 'react';

import Score from './components/Score';
import Tabs from './components/Tabs';
import './Header.scss';

const Header = ({ currentLvl, score }) => {
  return (
    <React.Fragment>
      <div className="header">
        <h1>SongBird</h1>
        <Score score={score} />
      </div>
      <Tabs currentLvl={currentLvl} />
    </React.Fragment>
  );
};

export default Header;