import React from 'react';
import styles from './index.module.css';

function UserAvatar(props) {
  return (
    <div className={styles.avatar}>
      <img src={props.img} alt="avatar" />
    </div>
  );
}

export default UserAvatar;
