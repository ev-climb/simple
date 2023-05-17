import React from 'react';
import Content from '../../components/Content/Content';

import styles from './index.module.css';
import users from '../../data/users';

function News() {
  return (
    <div className={styles.news}>
      <Content user={users[0]} />
    </div>
  );
}

export default News;
