import React from 'react';

import styles from './index.module.css';

function Avatar(props) {
  return (
    <img
      src={props.img}
      alt="avatar"
      className={styles.avatar}
      style={{ width: props.size, height: props.size }}
    />
  );
}

export default Avatar;
