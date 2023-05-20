import React from 'react';
import styles from './index.module.css';

import Avatar from '../Avatar/Avatar';

function Post({ post, removePost }) {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <Avatar size="40px" img={post.user.img} />
        <div className={styles.info}>
          <p>{post.user.name}</p>
          <p>6 янв 2021</p>
        </div>
        <img
          src="/images/icons/icon-remove.svg"
          alt="remove"
          onClick={() => removePost(post.PostId)}
        />
      </div>
      <p className={styles.text}>{post.text}</p>
      {post.imgPost && <img className={styles.image} src={post.imgPost} alt="photo" />}
    </div>
  );
}

export default Post;
