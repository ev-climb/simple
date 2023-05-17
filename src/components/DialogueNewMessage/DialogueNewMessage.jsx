import React from 'react';
import styles from './index.module.css';

function DialogueNewMessage() {
  return (
    <div className={styles.newMassage}>
      <input type="text" placeholder="Напишите сообщение..." />
      <img src="/images/icons/icon-smile.png" alt="smile" />
      <img src="/images/icons/icon-photo.png" alt="photo" />
    </div>
  );
}

export default DialogueNewMessage;
