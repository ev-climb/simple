import React from 'react';

import DialogueScreenHeader from '../DialogueScreenHeader/DialogueScreenHeader';
import DialogueBoard from '../DialogueBoard/DialogueBoard';
import DialogueNewMessage from '../DialogueNewMessage/DialogueNewMessage';

import s from './index.module.css';
import users from '../../data/users';

function DialogueScreen() {
  return (
    <div className={s.tolk}>
      <DialogueScreenHeader user={users[1]} />
      <div>
        <DialogueBoard users={users} />
        <DialogueNewMessage />
      </div>
    </div>
  );
}

export default DialogueScreen;
