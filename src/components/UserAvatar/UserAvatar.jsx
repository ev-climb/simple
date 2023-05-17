import React from 'react';
import s from './index.module.css';

function UserAvatar(props) {
  return (
    <div className={s.avatar}>
      <img src={props.img} alt="avatar" />
    </div>
  );
}

export default UserAvatar;
