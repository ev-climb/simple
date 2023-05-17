import React, { useState, useEffect } from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Avatar from '../Avatar/Avatar';

import styles from './index.module.css';

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
    <header className={`${styles.header} ${!isHeaderVisible && styles.slideUp}`}>
      <div className={styles.container}>
        <Logo width="100px" />
        <Menu />
        <div className={styles.avatar}>
          <Avatar size="40px" img={'/images/users/evgeny/evgeny.png'} />
          <img src="/images/icons/icon-arrow-dowv.png" alt="" className={styles.arrow} />
        </div>
      </div>
    </header>
  );
}
export default Header;
