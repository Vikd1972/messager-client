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

export const getMessages = (): Promise<MessagesResponseType> => {
  return instance.get(
    NewsEndpoints.getMessages(),
  );
};

type MessageRequesrType = {
  message: string;
};

export const setMessage = (data: MessageRequesrType): Promise<string> => {
  return instance.post(
    NewsEndpoints.createMessage(),
    data,
  );
};
