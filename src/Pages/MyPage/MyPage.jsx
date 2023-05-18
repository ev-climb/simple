import React from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';
import Content from '../../components/Content/Content';
import styles from './index.module.css';

function MyPage({ users, posts, addPost }) {
  return (
    <div className={styles.myPage}>
      <UserInfo user={users[0]} />
      <Content user={users[0]} posts={posts} addPost={addPost} />
    </div>
  );
}

export default MyPage;
