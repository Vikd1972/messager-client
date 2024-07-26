import React from 'react';
import { AxiosError } from 'axios';
import { io } from 'socket.io-client';

import NewsItem from '../MessageItem/MessageItem';
import ListWrapper from './MessagesList.styles';
import config from '../../utils/constant';
import { getMessages } from '../../api/messagesApi';
import showToast from '../../utils/showToast';

const socket = io(config.socketUrl);

const MessagesList: React.FC = () => {
  const [messages, setMessages] = React.useState<string[]>(['']);
  const [updateIndicator, setUpdateIndicator] = React.useState<boolean>(false);

  React.useEffect(() => {
    socket.on('getMessage', (...options) => {
      setUpdateIndicator((prev) => !prev);
    });
    return () => { socket.removeAllListeners('getMessage'); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        const result = await getMessages();

        setMessages(result.data.messages);
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [updateIndicator]);

  return (
    <ListWrapper>
      {messages?.map((message) => (
        <NewsItem
          key={message}
          message={message}
        />
      ))}
    </ListWrapper>
  );
};

export default MessagesList;
