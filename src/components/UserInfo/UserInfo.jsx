import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';

import styles from './index.module.css';

function UserInfo({ user }) {
  return (
    <div className={styles.userBlock}>
      <UserAvatar img={user.img} />
      <div className={styles.data}>
        <h2 className={styles.name}>{user.name}</h2>
        <h3 className={styles.nick}>@{user.nik}</h3>
        <p className={styles.quote}>"{user.quote}"</p>
      </div>
      <button className={styles.edit}>Редактировать</button>
    </div>
  );
}

export default UserInfo;
