import React from 'react';

import Posts from '../Posts/Posts';
import FrandsMiniBlock from '../FrandsMiniBlock/FrandsMiniBlock';
import NewPostInput from '../NewPostInput/NewPostInput';

import styles from './index.module.css';

function Content({ user, posts, addPost }) {
  return (
    <div className={styles.content}>
      <div className={styles.postsBlock}>
        <NewPostInput user={user} posts={posts} addPost={addPost} />
        <Posts posts={posts} />
      </div>
      <FrandsMiniBlock />
    </div>
  );
}
export default Content;
