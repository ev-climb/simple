import React from 'react';
import s from './index.module.css';

import DialogueMessage from '../DialogueMessage/DialogueMessage';

function DialogueBoard() {
  return (
    <div className={s.tolkDesk}>
      <DialogueMessage />
      <DialogueMessage />
      <DialogueMessage />
      <DialogueMessage />
      <DialogueMessage />
    </div>
  );
}

export default DialogueBoard;
