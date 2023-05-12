import React from 'react';

import Avatar from '../Avatar/Avatar';
import Posts from '../Posts/Posts';
import FrandsMiniBlock from '../FrandsMiniBlock/FrandsMiniBlock';

import './index.css';

function Content() {
  return (
    <div className="content">
      <div className="posts-block">
        <div className="new-post-block">
          <Avatar size="40px" />
          <textarea type="text" placeholder="Что нового?" />
          <img src="/images/icons/icon-smile.png" alt="smile" />
          <img src="/images/icons/icon-photo.png" alt="photo" />
          <button>Опубликовать</button>
        </div>
        <Posts />
      </div>
      <FrandsMiniBlock />
    </div>
  );
}
export default Content;
