import React from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Avatar from '../Avatar/Avatar';

import './index.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo width="100px" />
        <Menu />
        <div className="header__avatar">
          <Avatar size="40px" />
          <img src="/images/icons/icon-arrow-dowv.png" alt="" className="header__avatar-arrow" />
        </div>
      </div>
    </header>
  );
}
export default Header;
