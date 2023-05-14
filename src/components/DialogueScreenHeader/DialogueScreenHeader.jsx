import React from 'react';
import s from './index.module.css';

import Avatar from '../Avatar/Avatar';

function DialogueScreenHeader() {
  return (
    <div className={s.tolkHeader}>
      <h2>Фиби</h2>
      <Avatar />
    </div>
  );
}

export default DialogueScreenHeader;
