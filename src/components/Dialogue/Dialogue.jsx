import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

import Avatar from '../Avatar/Avatar';

function Dialogue({ dialogue }) {
  return (
    <NavLink to={`/communication/${dialogue.userId}`} className={styles.link}>
      <div className={styles.user}>
        <Avatar img={dialogue.userAvatar} />
        <div className={styles.userBox}>
          <h3>{dialogue.userName}</h3>
          <p>{dialogue.dialogue[dialogue.dialogue.length - 1].text}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default Dialogue;
