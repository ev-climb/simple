import React from 'react';

import Avatar from '../Avatar/Avatar';
import EmojiInput from '../EmojiInput/EmojiInput';

import styles from './index.module.css';

function NewPostInput({ user, posts, addPost }) {
  const [newPostText, setNewPostText] = React.useState(''); //Стейт для вводимого в инпут текста
  const [newPostImage, setNewPostImage] = React.useState(null); //Стейт для изображения для нового поста
  const [showSmileyPicker, setShowSmileyPicker] = React.useState(false); //Состояние отображения списка имодзи
  const textInputRef = React.useRef(null); //Место установки курсора в инпуте

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
  };
  //Изменение высоты инпута в зависимости от введенных строк
  const calculateTextAreaHeight = () => {
    const lineHeight = 20; // Высота одной строки текста
    const minRows = 1; // Минимальное количество строк
    const maxRows = 20; // Максимальное количество строк

    const newLineCount = (newPostText.match(/\n/g) || []).length; // Количество символов новой строки

    const rows = Math.min(minRows + newLineCount, maxRows);
    return `${lineHeight * rows}px`;
  };
  //Выпадающий список имодзи
  const handleSmileyClick = () => {
    setShowSmileyPicker(!showSmileyPicker);
  };
  //Сбросить введенный текст и изображение
  const resetNewPost = () => {
    setNewPostText('');
    setNewPostImage(null);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.newPostBlock} ${newPostText && styles.newPostBlockActive}`}>
        <Avatar size="40px" img={user.img} />
        <textarea
          type="text"
          placeholder="Что нового?"
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          style={{ height: calculateTextAreaHeight() }}
          ref={textInputRef}
        />
        {newPostText && (
          <img src="/images/icons/icon-remove.svg" alt="remove" onClick={resetNewPost} />
        )}
      </div>
      {newPostImage && <img className={styles.postImage} src={newPostImage} />}

      <div className={styles.buttons}>
        <img src="/images/icons/icon-smile.png" alt="smile" onClick={handleSmileyClick} />
        {showSmileyPicker && (
          <EmojiInput
            textInputRef={textInputRef}
            newPostText={newPostText}
            setNewPostText={setNewPostText}
            setShowSmileyPicker={setShowSmileyPicker}
          />
        )}
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
        {newPostText || newPostImage ? (
          <button className={styles.submitBtn} onClick={handlePostSubmit}>
            Опубликовать
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default NewPostInput;
