import React from 'react';
import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function FrandsMiniBlockItem() {
  return (
    <div className={s.item}>
      <Avatar />
      <p>Чендлер</p>
    </div>
  );
}

export default FrandsMiniBlockItem;
