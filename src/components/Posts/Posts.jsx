import React from 'react';

import Post from '../Post/Post';

function Posts({ posts }) {
  const renderPosts = posts.map((post) => {
    return <Post user={post.user} text={post.text} img={post.imgPost} key={post.PostId} />;
  });

  return <div>{renderPosts}</div>;
}

export default Posts;
