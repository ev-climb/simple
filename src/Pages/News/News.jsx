import React from 'react';
import Content from '../../components/Content/Content';

import styles from './index.module.css';

function News({ posts, setPosts, addPost, users }) {
  return (
    <div className={styles.news}>
      <Content user={users[0]} posts={posts} setPosts={setPosts} addPost={addPost} />
    </div>
  );
}

export default News;
