import React from 'react';

import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function NewPostInput() {
  return (
    <div className={s.newPostBlock}>
      <Avatar size="40px" />
      <textarea type="text" placeholder="Что нового?" />
      <img src="/images/icons/icon-smile.png" alt="smile" />
      <img src="/images/icons/icon-photo.png" alt="photo" />
      <button>Опубликовать</button>
    </div>
  );
}

export default NewPostInput;
