import React from 'react';

import Posts from '../Posts/Posts';
import FrandsMiniBlock from '../FrandsMiniBlock/FrandsMiniBlock';
import NewPostInput from '../NewPostInput/NewPostInput';

import styles from './index.module.css';

function Content({ user }) {
  return (
    <div className={styles.content}>
      <div className={styles.postsBlock}>
        <NewPostInput user={user} />
        <Posts />
      </div>
      <FrandsMiniBlock />
    </div>
  );
}
export default Content;
