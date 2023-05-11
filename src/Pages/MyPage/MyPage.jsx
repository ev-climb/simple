import React from 'react';

import Content from '../../components/Content/Content';
import './index.css';

function MyPage() {
  return (
    <div className="my-page">
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="/images/users/alexandra/avatar-test-big.jpg" alt="avatar" />
        </div>
        <div className="user-block__data">
          <h2 className="user-block__name">Евсеева Александра</h2>
          <h3 className="user-block__nick">@sandra777</h3>
          <p className="user-block__quote">
            "Систематечески, сосредоточено, старательно и решительно"
          </p>
        </div>
        <button className="user-block__edit">Редактировать</button>
      </div>
      <Content />
    </div>
  );
}

export default MyPage;
