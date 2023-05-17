import React from 'react';

import Posts from '../Posts/Posts';
import FrandsMiniBlock from '../FrandsMiniBlock/FrandsMiniBlock';
import NewPostInput from '../NewPostInput/NewPostInput';

import s from './index.module.css';

function Content({ user }) {
  return (
    <div className={s.content}>
      <div className={s.postsBlock}>
        <NewPostInput user={user} />
        <Posts />
      </div>
      <FrandsMiniBlock />
    </div>
  );
}
export default Content;
