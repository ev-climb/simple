import React from 'react';
import s from './index.module.css';

import DialogueList from '../../components/DialogueList/DialogueList';
import DialogueScreen from '../../components/DialogueScreen/DialogueScreen';

function Communication() {
  return (
    <div className={s.communication}>
      <DialogueList />
      <DialogueScreen />
    </div>
  );
}

export default Communication;
