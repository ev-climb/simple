import React from 'react';

import Post from '../Post/Post';

function Posts({ posts, setPosts }) {
  const removePostFromState = (PostId) => {
    const updatedPosts = posts.filter((post) => post.PostId !== PostId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const renderPosts = posts.reverse().map((post) => {
    return <Post post={post} removePost={removePostFromState} key={post.PostId} />;
  });

  return <div>{renderPosts}</div>;
}

export default Posts;
