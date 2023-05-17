import React from 'react';
import styles from './index.module.css';

import Avatar from '../Avatar/Avatar';

function DialogueMessage({ user, text }) {
  return (
    <div className={styles.tolkItem}>
      <Avatar img={user.img} />
      <div className={styles.tolkItem__userBox}>
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
