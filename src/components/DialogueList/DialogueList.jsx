import React from 'react';

import Dialogue from '../Dialogue/Dialogue';

import s from './index.module.css';

function DialogueList() {
  return (
    <div className={s.users}>
      <Dialogue />
      <Dialogue />
      <Dialogue />
      <Dialogue />
    </div>
  );
}

export default DialogueList;
