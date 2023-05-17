import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';

import s from './index.module.css';

function UserInfo({ user }) {
  return (
    <div className={s.userBlock}>
      <UserAvatar img={user.img} />
      <div className={s.data}>
        <h2 className={s.name}>{user.name}</h2>
        <h3 className={s.nick}>@{user.nik}</h3>
        <p className={s.quote}>"{user.quote}"</p>
      </div>
      <button className={s.edit}>Редактировать</button>
    </div>
  );
}

export default UserInfo;
