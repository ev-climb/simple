import React from 'react';
import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function FrandsMiniBlockItem({ user }) {
  return (
    <div className={s.item}>
      <Avatar img={user.img} />
      <p>{user.name}</p>
    </div>
  );
}

export default FrandsMiniBlockItem;
