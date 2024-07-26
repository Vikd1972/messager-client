import React from 'react';
import MessageItemWrapper from './MessageItem.styles';

type PropsType = {
  message: string;
};

const MessageItem: React.FC<PropsType> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <MessageItemWrapper>
      {message}
    </MessageItemWrapper>
  );
};

export default MessageItem;
