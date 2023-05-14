import React from 'react';
import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function DialogueMessage() {
  return (
    <div className={s.tolkItem}>
      <Avatar />
      <div className={s.tolkItem__userBox}>
        <div>
          <h3>Александра</h3>
          <span>22:49</span>
        </div>
        <p>Привет, как дела?</p>
      </div>
    </div>
  );
}

export default DialogueMessage;
