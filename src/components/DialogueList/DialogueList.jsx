import React from 'react';

import Dialogue from '../Dialogue/Dialogue';

import styles from './index.module.css';

function DialogueList({ user }) {
  const renderDialogus = user.dialogues.map((dialogue) => {
    return <Dialogue dialogue={dialogue} key={dialogue.userId} />;
  });

  return <div className={styles.users}>{renderDialogus}</div>;
}

export default DialogueList;
