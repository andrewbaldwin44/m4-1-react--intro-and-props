import React from 'react';

import './ReceivedMessage.css';

const ReceivedMessage = ({ user, body }) => {
  return (
    <div className='chat-message'>
      <img className='user-avatar' src={user.avatar}/>
      <div className='chat-text'>
        <span className='user-name'>{user.username}</span>
        <span className='chat-body received'>{body}</span>
      </div>
    </div>
  );
};

export default ReceivedMessage;
