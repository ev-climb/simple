export const postsData = JSON.parse(localStorage.getItem('posts')) || [];

export const addPostToData = (post) => {
  postsData.push(post);
  localStorage.setItem('posts', JSON.stringify(postsData));
};
