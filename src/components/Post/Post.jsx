import React from 'react';
import styles from './index.module.css';

import Avatar from '../Avatar/Avatar';

function Post({ user, text, img }) {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <Avatar size="40px" img={user.img} />
        <div className={styles.info}>
          <p>{user.name}</p>
          <p>6 янв 2021</p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
      <img className={styles.image} src={img} alt="photo" />
    </div>
  );
}

export default Post;
