import React from 'react';

import styles from './index.module.css';
import users from '../../data/users';

import FrandsMiniBlockItem from '../FrandsMiniBlockItem/FrandsMiniBlockItem';

function FrandsMiniBlock() {
  const usersForMiniBlock = users[0].friends.slice(0, 8).map((user) => {
    return <FrandsMiniBlockItem user={user} key={user.id} />;
  });

  return (
    <div className={styles.frendsBlock}>
      <div className={styles.frendsMiniBlock}>
        <div className={styles.title}>
          <h2>Друзья</h2>
          <span>{users[0].friends.length}</span>
        </div>
        <div className={styles.items}>{usersForMiniBlock}</div>
      </div>
    </div>
  );
}

export default FrandsMiniBlock;
