import React from 'react';

import './index.css';

function FrandsMiniBlock() {
  return (
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
  );
}

export default FrandsMiniBlock;
