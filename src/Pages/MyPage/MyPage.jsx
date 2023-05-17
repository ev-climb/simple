import React from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';
import Content from '../../components/Content/Content';
import s from './index.module.css';

import users from '../../data/users';

function MyPage() {
  return (
    <div className={s.myPage}>
      <UserInfo user={users[0]} />
      <Content user={users[0]} />
    </div>
  );
}

export default MyPage;
