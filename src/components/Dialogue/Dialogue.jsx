import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function Dialogue({ dialogue }) {
  return (
    <NavLink to={`/communication/${dialogue.userId}`} className={s.link}>
      <div className={s.user}>
        <Avatar img={dialogue.userAvatar} />
        <div className={s.userBox}>
          <h3>{dialogue.userName}</h3>
          <p>{dialogue.dialogue[dialogue.dialogue.length - 1].text}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default Dialogue;
