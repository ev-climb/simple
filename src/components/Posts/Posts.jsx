import React from 'react';

import Avatar from '../Avatar/Avatar';

import './index.css';

function Posts() {
  return (
    <div className="posts">
      <div className="post">
        <div className="post__header">
          <Avatar size="40px" />
          <div className="post__info">
            <p>Евсеева Александра</p>
            <p>6 янв 2021</p>
          </div>
        </div>
        <p className="post__text">Впереди лето и много всего интересного! Готовимся!</p>
        <img className="post__image" src="/images/users/alexandra/posts/1.jpeg" alt="photo" />
      </div>
    </div>
  );
}

export default Posts;
