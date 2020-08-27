import React from 'react';

import Score from './components/Score';
import Tabs from './components/Tabs';
import './Header.scss';

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <h1>SongBird</h1>
        <Score />
      </div>
      <Tabs />
    </React.Fragment>
  );
};

export default Header;