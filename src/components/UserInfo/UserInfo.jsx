import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';

import s from './index.module.css';

function UserInfo() {
  return (
    <div className={s.userBlock}>
      <UserAvatar />
      <div className={s.data}>
        <h2 className={s.name}>Евсеева Александра</h2>
        <h3 className={s.nick}>@sandra777</h3>
        <p className={s.quote}>
          "Систематечески, сосредоточено, старательно и решительно"
        </p>
      </div>
      <button className={s.edit}>Редактировать</button>
    </div>
  );
}

export default UserInfo;
