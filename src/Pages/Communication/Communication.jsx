import React from 'react';
import './index.css';

function Communication() {
  return (
    <div className="communication">
      <div className="communication__users">
        <div className="communication__user">
          <img src="/images/users/phoebe/phoebe.jpeg" alt="avatar" />
          <div className="communication__user-box">
            <h3>Фиби</h3>
            <p>Драный кот, драный кот, у тебя пустой живот.</p>
          </div>
        </div>
        <div className="communication__user">
          <img src="/images/users/ross/ross.jpg" alt="avatar" />
          <div className="communication__user-box">
            <h3>Росс</h3>
            <p>
              Привет, как дела? Напишу тект подлиннее, чтобы протестировать переносы на другую
              строку.
            </p>
          </div>
        </div>
        <div className="communication__user">
          <img src="/images/users/monica/monica.webp" alt="avatar" />
          <div className="communication__user-box">
            <h3>Моника</h3>
            <p>
              Одолжишь денег до получки? Напишу тект подлиннее, чтобы протестировать переносы на
              другую строку.
            </p>
          </div>
        </div>
        <div className="communication__user">
          <img src="/images/users/joey/joey.jpeg" alt="avatar" />
          <div className="communication__user-box">
            <h3>Джо</h3>
            <p>Джо не делится едой!</p>
          </div>
        </div>
      </div>
      <div className="communication__tolk">
        <div className="communication__tolk-header">
          <h2>Фиби</h2>
          <img src="/images/users/phoebe/phoebe.jpeg" alt="avatar" />
        </div>
        <div>
          <div className="communication__tolk-desk">
            <div className="communication__tolk-item">
              <img src="/images/users/alexandra/avatar-test.jpg" alt="avatar" />
              <div className="communication__tolk-item__user-box">
                <div>
                  <h3>Александра</h3>
                  <span>22:49</span>
                </div>
                <p>Привет, как дела?</p>
              </div>
            </div>
            <div className="communication__tolk-item">
              <img src="/images/users/phoebe/phoebe.jpeg" alt="avatar" />
              <div className="communication__tolk-item__user-box">
                <div>
                  <h3>Фиби</h3>
                  <span>22:51</span>
                </div>
                <p>Драный кот, драный кот, у тебя пустой живот.</p>
              </div>
            </div>
          </div>
          <div className="communication__new-massage">
            <input type="text" placeholder="Напишите сообщение..." />
            <img src="/images/icons/icon-smile.png" alt="smile" />
            <img src="/images/icons/icon-photo.png" alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communication;
