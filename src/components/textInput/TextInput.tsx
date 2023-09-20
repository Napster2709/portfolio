import React from 'react';
import s from './styles.scss';
import cn from 'classnames';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>;
}

const TextInput: React.FC<TextInputProps> = ({ inputRef, ...props }) => {
  return (
    <input
      ref={inputRef}
      className={cn(props.className, s.input)}
      spellCheck={false}
      {...props}
    />
  );
};

export { TextInput };
