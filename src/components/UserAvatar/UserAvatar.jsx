import React from 'react';
import s from './index.module.css';

function UserAvatar() {
  return (
    <div className={s.avatar}>
      <img src="/images/users/alexandra/avatar-test-big.jpg" alt="avatar" />
    </div>
  );
}

export default UserAvatar;
