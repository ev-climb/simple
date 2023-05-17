import React from 'react';

import styles from './index.module.css';

import Avatar from '../Avatar/Avatar';

function NewPostInput({ user }) {
  return (
    <div className={styles.newPostBlock}>
      <Avatar size="40px" img={user.img} />
      <textarea type="text" placeholder="Что нового?" />
      <img src="/images/icons/icon-smile.png" alt="smile" />
      <img src="/images/icons/icon-photo.png" alt="photo" />
      <button>Опубликовать</button>
    </div>
  );
}

export default NewPostInput;
