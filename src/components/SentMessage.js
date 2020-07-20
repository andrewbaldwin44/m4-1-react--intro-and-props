import React from 'react';

import './SentMessage.css';

const SentMessage = ({body}) => {
  return (
    <div className='chat-message'>
      <div className='chat-text sent-text'>
        <div className='chat-bubble'>
          <span className='chat-body sent'>{body}</span>
          <img className='chat-tip sent' src='/assets/tip-sent.svg'/>
        </div>
      </div>
    </div>
  );
};

export default SentMessage;
