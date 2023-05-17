import React from 'react';
import styles from './index.module.css';

function Logo(props) {
  return (
    <img
      src="/images/logo/simple-logo-blue.svg"
      alt="logo"
      className={styles.logo}
      style={{ width: props.width }}
    />
  );
}

export default Logo;
