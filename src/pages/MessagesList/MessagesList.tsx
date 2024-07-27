import React from 'react';
import { io } from 'socket.io-client';

import NewsItem from '../MessageItem/MessageItem';
import ListWrapper from './MessagesList.styles';
import config from '../../utils/constant';
import { useGetMessages } from '../../api/messagesApi';

const socket = io(config.socketUrl);

const MessagesList: React.FC = () => {
  const [messages, setMessages] = React.useState<string[]>(['']);
  const [updateIndicator, setUpdateIndicator] = React.useState<boolean>(false);

  const { data, refetch } = useGetMessages();

  React.useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateIndicator]);

  React.useEffect(() => {
    setMessages(data?.data.messages as string[]);
  }, [data]);

  React.useEffect(() => {
    socket.on('getMessage', (...options) => {
      setUpdateIndicator((prev) => !prev);
    });
    return () => { socket.removeAllListeners('getMessage'); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListWrapper>
      {messages?.map((message, index) => (
        <NewsItem
          key={index}
          message={message}
        />
      ))}
    </ListWrapper>
  );
};

export default MessagesList;
