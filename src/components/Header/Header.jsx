import React from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Avatar from '../Avatar/Avatar';

import s from './index.module.css';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo width="100px" />
        <Menu />
        <div className={s.avatar}>
          <Avatar size="40px" />
          <img src="/images/icons/icon-arrow-dowv.png" alt="" className={s.arrow} />
        </div>
      </div>
    </header>
  );
}
export default Header;
