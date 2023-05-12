import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Menu() {
  return (
    <nav className="menu">
      <li className="menu__item">
        <Link to="/">
          <img src="/images/icons/icon-account-blue.png" alt="icon-account" />
          Моя страница
        </Link>
      </li>

      <li className="menu__item">
        <Link to="/communication">
          <img src="/images/icons/icon-tolk-blue.png" alt="icon-tolk" />
          Общение
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/news">
          <img src="/images/icons/icon-news-blue.svg" alt="icon-news" />
          Новости
        </Link>
      </li>
    </nav>
  );
}

export default Menu;
