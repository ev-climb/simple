import React from 'react';
import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function DialogueScreenHeader({ user }) {
  return (
    <div className={s.tolkHeader}>
      <h2>{user.name}</h2>
      <Avatar img={user.img} />
    </div>
  );
}

export default DialogueScreenHeader;
