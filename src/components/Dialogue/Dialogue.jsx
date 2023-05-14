import React from 'react';
import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function Dialogue() {
  return (
    <div className={s.user}>
      <Avatar />
      <div className={s.userBox}>
        <h3>Фиби</h3>
        <p>Драный кот, драный кот, у тебя пустой живот.</p>
      </div>
    </div>
  );
}

export default Dialogue;
