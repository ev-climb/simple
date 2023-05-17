import React from 'react';
import s from './index.module.css';

import DialogueMessage from '../DialogueMessage/DialogueMessage';

function DialogueBoard({ users }) {
  return (
    <div className={s.tolkDesk}>
      <DialogueMessage user={users[1]} text="Привет! Как дела?" />
      <DialogueMessage user={users[0]} text="Привет! Всё супер, как твои?" />
      <DialogueMessage user={users[1]} text="Всё отлично! Чем занят?" />
      <DialogueMessage user={users[0]} text="Пишу диалог сам с собой, а ты?" />
      <DialogueMessage user={users[1]} text="лол" />
    </div>
  );
}

export default DialogueBoard;
