import React from 'react';

import s from './index.module.css';
import users from '../../data/users';

import FrandsMiniBlockItem from '../FrandsMiniBlockItem/FrandsMiniBlockItem';

function FrandsMiniBlock() {
  const usersForMiniBlock = users[0].friends.slice(0, 8).map((user) => {
    return <FrandsMiniBlockItem user={user} key={user.id} />;
  });

  return (
    <div className={s.frendsBlock}>
      <div className={s.frendsMiniBlock}>
        <div className={s.title}>
          <h2>Друзья</h2>
          <span>{users[0].friends.length}</span>
        </div>
        <div className={s.items}>{usersForMiniBlock}</div>
      </div>
    </div>
  );
}

export default FrandsMiniBlock;
