import React from 'react';
import { AxiosError } from 'axios';
import { io } from 'socket.io-client';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import WriteMessageWrapper from './WriteMessage.styles';
import config from '../../utils/constant';
import { setMessage } from '../../api/messagesApi';
import showToast from '../../utils/showToast';

const socket = io(config.socketUrl);

const WriteMessage: React.FC = () => {
  const [text, setText] = React.useState('');

  const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const toClear = () => {
    setText('');
  };

  const onSubmit = async (e: React.KeyboardEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!text.trim()) {
        showToast(config.requiredErrorMessage);
        return;
      }

      const data = {
        message: text.trim(),
      };

      const message = await setMessage(data);

      socket.emit('setMessage', 'A new message has been sent');
      setText('');
    } catch (err) {
      if (err instanceof AxiosError) {
        showToast(err.message);
      }
    }
  };

  return (
    <WriteMessageWrapper>
      <form onSubmit={onSubmit}>
        <div className="task-item">
          <p>Message:</p>
          <TextField
            name="message"
            value={text}
            onChange={onTextChanged}
            margin="normal"
            placeholder="Содержание сообщения"
            fullWidth
          />
        </div>

        <div className="button-grioup">
          <Button
            className="button-item"
            variant="outlined"
            onClick={toClear}
          >
            Очистить
          </Button>

          <Button
            type="submit"
            className="button-item"
            variant="outlined"
          >
            Отравить
          </Button>
        </div>
      </form>
    </WriteMessageWrapper>
  );
};

export default WriteMessage;
