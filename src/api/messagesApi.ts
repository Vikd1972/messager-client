import { useQuery, useMutation } from 'react-query';
import instance from '.';

class NewsEndpoints {
  static getMessages = () => '/messages';

  static createMessage = () => '/messages';
}

type MessagesResponseType = {
  data: {
    messages: string[];
  } ;
};

type MessageRequesrType = {
  message: string;
};

export const useGetMessages = () => {
  return useQuery<MessagesResponseType>(
    'messages',
    () => instance.get(NewsEndpoints.getMessages()),
  );
};

export const useSetMessage = () => {
  return useMutation<string, unknown, MessageRequesrType>(
    'createMessage',
    (data) => instance.post(NewsEndpoints.createMessage(), data),
  );
};
