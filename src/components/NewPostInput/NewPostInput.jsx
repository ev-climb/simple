import React from 'react';

import Avatar from '../Avatar/Avatar';

import styles from './index.module.css';

function NewPostInput({ user, posts, addPost }) {
  const [newPostText, setNewPostText] = React.useState('');
  const [newPostImage, setNewPostImage] = React.useState(null);

  //Добавление изображения
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setNewPostImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };
  //Создание нового поста по нажатию на submit
  const handlePostSubmit = () => {
    const newPost = {
      PostId: `${posts.length + 1}`,
      date: new Date().toLocaleDateString(),
      imgPost: newPostImage,
      text: `${newPostText}`,
      user: {
        userId: `${user.userId}`,
        name: user.name,
        img: user.img,
      },
    };

    addPost(newPost);
    setNewPostText('');
    setNewPostImage(null);
    console.log(newPost);
  };

  return (
    <div className={styles.newPostBlock}>
      <Avatar size="40px" img={user.img} />
      <textarea
        type="text"
        placeholder="Что нового?"
        value={newPostText}
        onChange={(e) => setNewPostText(e.target.value)}
      />
      <img src="/images/icons/icon-smile.png" alt="smile" />
      <label htmlFor="imageInput">
        <img src="/images/icons/icon-photo.png" alt="photo" />
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <button onClick={handlePostSubmit}>Опубликовать</button>
    </div>
  );
}

export default NewPostInput;
