import React from 'react';
import './index.css';

function Logo(props) {
  return (
    <img
      src="/images/logo/simple-logo-blue.svg"
      alt="logo"
      className="header__logo"
      style={{ width: props.width }}
    />
  );
}

export default Logo;
