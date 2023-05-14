import React from 'react';
import s from './index.module.css';

import DialogueScreenHeader from '../DialogueScreenHeader/DialogueScreenHeader';
import DialogueBoard from '../DialogueBoard/DialogueBoard';
import DialogueNewMessage from '../DialogueNewMessage/DialogueNewMessage';

function DialogueScreen() {
  return (
    <div className={s.tolk}>
      <DialogueScreenHeader />
      <div>
        <DialogueBoard />
        <DialogueNewMessage />
      </div>
    </div>
  );
}

export default DialogueScreen;
