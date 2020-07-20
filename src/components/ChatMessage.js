import React from 'react';

import './ChatMessage.css';

import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';

const ChatMessage = ({user, body, messageType}) => {
  return messageType === 'sent'
    ? <SentMessage body={body} />
    : <ReceivedMessage user={user} body={body} />;
};

export default ChatMessage;
