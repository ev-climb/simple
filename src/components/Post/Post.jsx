import React from 'react';
import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function Post() {
  return (
    <div className={s.post}>
      <div className={s.header}>
        <Avatar size="40px" />
        <div className={s.info}>
          <p>Евсеева Александра</p>
          <p>6 янв 2021</p>
        </div>
      </div>
      <p className={s.text}>Впереди лето и много всего интересного! Готовимся!</p>
      <img className={s.image} src="/images/users/alexandra/posts/1.jpeg" alt="photo" />
    </div>
  );
}

export default Post;
