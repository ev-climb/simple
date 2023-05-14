import React from 'react';
import s from './index.module.css';

function Logo(props) {
  return (
    <img
      src="/images/logo/simple-logo-blue.svg"
      alt="logo"
      className={s.logo}
      style={{ width: props.width }}
    />
  );
}

export default Logo;
