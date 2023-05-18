export const postsData = JSON.parse(localStorage.getItem('posts')) || [];
// export const postsData = [
//   {
//     PostId: '1',
//     date: '6 мая 2021',
//     imgPost: '/images/users/evgeny/posts/1.jpeg',
//     text: 'Впереди лето и много всего интересного! Готовимся!',
//     user: {
//       userId: '1',
//       name: 'Евгений Евсеев',
//       img: '/images/users/evgeny/evgeny.png',
//     },
//   },
//   {
//     PostId: '2',
//     date: '6 мая 2021',
//     imgPost: '/images/users/evgeny/posts/2.png',
//     text: 'Когда помешался на жене))',
//     user: {
//       userId: '1',
//       name: 'Евгений Евсеев',
//       img: '/images/users/evgeny/evgeny.png',
//     },
//   },
// ];

export const addPostToData = (post) => {
  postsData.push(post);
  localStorage.setItem('posts', JSON.stringify(postsData));
};
