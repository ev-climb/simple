import React from 'react';
import './index.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src="/images/logo/simple-logo-blue.svg" alt="logo" className="header__logo" />
        <nav className="menu">
          <li className="menu__item">
            <img src="/images/icons/icon-account-blue.png" alt="icon-account" /> Моя страница
          </li>
          <li className="menu__item">
            <img src="/images/icons/icon-tolk-blue.png" alt="icon-tolk" />
            Общение
          </li>
          <li className="menu__item">
            <img src="/images/icons/icon-news-blue.svg" alt="icon-news" />
            Новости
          </li>
        </nav>
        <div className="header__avatar">
          <img
            src="/images/users/alexandra/avatar-test.jpg"
            alt="avatar"
            className="header__avatar-image"
          />
          <img src="/images/icons/icon-arrow-dowv.png" alt="" className="header__avatar-arrow" />
        </div>
      </div>
    </header>
  );
}
export default Header;
