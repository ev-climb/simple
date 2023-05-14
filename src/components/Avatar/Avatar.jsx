import React from 'react';

import s from './index.module.css';

function Avatar(props) {
  return (
    <img
      src="/images/users/alexandra/avatar-test.jpg"
      alt="avatar"
      className={s.avatar}
      style={{ width: props.size, height: props.size }}
    />
  );
}

export default Avatar;
