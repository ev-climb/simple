import React from 'react';

import './index.css';

function Avatar(props) {
  return (
    <img
      src="/images/users/alexandra/avatar-test.jpg"
      alt="avatar"
      className="avatar-image"
      style={{ width: props.size, height: props.size }}
    />
  );
}

export default Avatar;
