import React from 'react';

import './SentMessage.css';

const SentMessage = ({body}) => {
  return (
    <div className='chat-message'>
      <div className='chat-text sent-text'>
        <span className='chat-body sent'>{body}</span>
      </div>
    </div>
  );
};

export default SentMessage;
