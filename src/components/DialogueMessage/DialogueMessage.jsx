import React from 'react';
import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function DialogueMessage({ user, text }) {
  return (
    <div className={s.tolkItem}>
      <Avatar img={user.img} />
      <div className={s.tolkItem__userBox}>
        <div>
          <h3>{user.name}</h3>
          <span>22:49</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default DialogueMessage;
