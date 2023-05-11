import React from 'react';

import './index.css';

function Content() {
  return (
    <div className="content">
      <div className="posts-block">
        <div className="new-post-block">
          <img
            className="post__avatar"
            src="/images/users/alexandra/avatar-test.jpg"
            alt="avatar"
          />
          <textarea type="text" placeholder="Что нового?" />
          <img src="/images/icons/icon-smile.png" alt="smile" />
          <img src="/images/icons/icon-photo.png" alt="photo" />
          <button>Опубликовать</button>
        </div>
        <div className="posts">
          <div className="post">
            <div className="post__header">
              <img
                className="post__avatar"
                src="/images/users/alexandra/avatar-test.jpg"
                alt="avatar"
              />
              <div className="post__info">
                <p>Евсеева Александра</p>
                <p>6 янв 2021</p>
              </div>
            </div>
            <p className="post__text">Впереди лето и много всего интересного! Готовимся!</p>
            <img className="post__image" src="/images/users/alexandra/posts/1.jpeg" alt="photo" />
          </div>
        </div>
      </div>
      <div className="frends-block">
        <div className="frends-mini-block">
          <div className="frends-mini-block__title">
            <h2>Друзья онлайн</h2>
            <span>5</span>
          </div>
          <div className="frends-mini-block__items">
            <div className="frends-mini-block__item">
              <img src="/images/users/chandler/chandler.jpeg" alt="avatar" />
              <p>Чендлер</p>
            </div>
            <div className="frends-mini-block__item">
              <img src="/images/users/monica/monica.webp" alt="avatar" />
              <p>Моника</p>
            </div>
            <div className="frends-mini-block__item">
              <img src="/images/users/joey/joey.jpeg" alt="avatar" />
              <p>Джо</p>
            </div>
            <div className="frends-mini-block__item">
              <img src="/images/users/phoebe/phoebe.jpeg" alt="avatar" />
              <p>Фиби</p>
            </div>
          </div>
        </div>
        <div className="frends-mini-block">
          <div className="frends-mini-block__title">
            <h2>Друзья</h2>
            <span>248</span>
          </div>
          <div className="frends-mini-block__items">
            <div className="frends-mini-block__item">
              <img src="/images/users/rachel/rachel.jpeg" alt="avatar" />
              <p>Рейчал</p>
            </div>
            <div className="frends-mini-block__item">
              <img src="/images/users/ross/ross.jpg" alt="avatar" />
              <p>Росс</p>
            </div>
            <div className="frends-mini-block__item">
              <img src="/images/users/joey/joey.jpeg" alt="avatar" />
              <p>Джо</p>
            </div>
            <div className="frends-mini-block__item">
              <img src="/images/users/phoebe/phoebe.jpeg" alt="avatar" />
              <p>Фиби</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
