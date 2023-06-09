import React from 'react';

import DialogueList from '../../components/DialogueList/DialogueList';
import DialogueScreen from '../../components/DialogueScreen/DialogueScreen';

import styles from './index.module.css';
import users from '../../data/users';

function Communication() {
  return (
    <div className={styles.communication}>
      <DialogueList user={users[0]} />
      <DialogueScreen user={users[0]} />
    </div>
  );
}

export default Communication;
