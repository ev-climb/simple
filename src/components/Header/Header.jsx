import React, { useState, useEffect } from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Avatar from '../Avatar/Avatar';

import s from './index.module.css';

function Header() {
  //Эффект исчезания и появления при скроле
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  //--

  return (
    <header className={`${s.header} ${!isHeaderVisible && s.slideUp}`}>
      <div className={s.container}>
        <Logo width="100px" />
        <Menu />
        <div className={s.avatar}>
          <Avatar size="40px" img={'/images/users/evgeny/evgeny.png'} />
          <img src="/images/icons/icon-arrow-dowv.png" alt="" className={s.arrow} />
        </div>
      </div>
    </header>
  );
}
export default Header;
