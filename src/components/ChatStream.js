import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage';

const ChatStream = (props) => {
  return (
    <section className='chat-stream'>
      {props.messages.map(message => {
        let messageType = message.user == props.currentUser
          ? 'sent'
          : 'received';

        return (
          <ChatMessage
            user={message.user}
            body={message.body}
            messageType={messageType}
          />
        )
      })}
    </section>
  );
};

export default ChatStream;
