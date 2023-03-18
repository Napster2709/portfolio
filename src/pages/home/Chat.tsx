import React from 'react';
import s from './chat.styles.scss';
import { TextInput } from 'components';

const Chat = () => {
  return (
    <div className={s.content}>
      <TextInput />
    </div>
  );
};

export { Chat };
