import React from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';
import Content from '../../components/Content/Content';
import s from './index.module.css';

function MyPage() {
  return (
    <div className={s.myPage}>
      <UserInfo />
      <Content />
    </div>
  );
}

export default MyPage;
