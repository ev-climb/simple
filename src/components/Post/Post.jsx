import React from 'react';
import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function Post({ user, text, img }) {
  return (
    <div className={s.post}>
      <div className={s.header}>
        <Avatar size="40px" img={user.img} />
        <div className={s.info}>
          <p>{user.name}</p>
          <p>6 янв 2021</p>
        </div>
      </div>
      <p className={s.text}>{text}</p>
      <img className={s.image} src={img} alt="photo" />
    </div>
  );
}

export default Post;
