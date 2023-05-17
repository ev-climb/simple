import React from 'react';
import styles from './index.module.css';

import Avatar from '../Avatar/Avatar';

function FrandsMiniBlockItem({ user }) {
  return (
    <div className={styles.item}>
      <Avatar img={user.img} />
      <p>{user.name}</p>
    </div>
  );
}

export default FrandsMiniBlockItem;
