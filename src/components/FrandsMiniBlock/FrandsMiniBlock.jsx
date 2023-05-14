import React from 'react';

import s from './index.module.css';

import FrandsMiniBlockItem from '../FrandsMiniBlockItem/FrandsMiniBlockItem';

function FrandsMiniBlock() {
  return (
    <div className={s.frendsBlock}>
      <div className={s.frendsMiniBlock}>
        <div className={s.title}>
          <h2>Друзья онлайн</h2>
          <span>5</span>
        </div>
        <div className={s.items}>
          <FrandsMiniBlockItem />
          <FrandsMiniBlockItem />
          <FrandsMiniBlockItem />
          <FrandsMiniBlockItem />
        </div>
      </div>
      <div className={s.frendsMiniBlock}>
        <div className={s.title}>
          <h2>Друзья</h2>
          <span>248</span>
        </div>
        <div className={s.items}>
          <FrandsMiniBlockItem />
          <FrandsMiniBlockItem />
          <FrandsMiniBlockItem />
          <FrandsMiniBlockItem />
        </div>
      </div>
    </div>
  );
}

export default FrandsMiniBlock;
