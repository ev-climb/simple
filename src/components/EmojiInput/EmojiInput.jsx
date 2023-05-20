import { useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';

import styles from './index.module.css';

function EmojiInput({ textInputRef, newPostText, setNewPostText, setShowSmileyPicker }) {
  const emojiPickerRef = useRef(null);

  const handleEmojiSelect = (emoji) => {
    const inputElement = textInputRef.current;
    const currentPosition = inputElement.selectionStart;

    // Вставляем выбранный имодзи в текст в позицию курсора
    const newText =
      newPostText.slice(0, currentPosition) + emoji.emoji + newPostText.slice(currentPosition);
    setNewPostText(newText);

    // Перемещаем курсор в конец вставленного имодзи
    const newPosition = currentPosition + emoji.length;
    inputElement.setSelectionRange(newPosition, newPosition);
  };

  const handleOutsideClick = (event) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target) &&
      textInputRef.current &&
      !textInputRef.current.contains(event.target)
    ) {
      setShowSmileyPicker(false);
    }
  };

  const handleEscKey = (event) => {
    if (event.keyCode === 27) {
      setShowSmileyPicker(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className={styles.emoji} ref={emojiPickerRef}>
      <EmojiPicker
        height={400}
        width={400}
        searchDisabled={true}
        skinTonesDisabled={true}
        onEmojiClick={handleEmojiSelect}
      />
    </div>
  );
}

export default EmojiInput;
