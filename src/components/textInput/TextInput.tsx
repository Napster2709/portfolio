import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>;
}

const TextInput = ({
  inputRef,
  ...props
}: TextInputProps): React.ReactElement => {
  return (
    <input
      ref={inputRef}
      className={cn(props.className, styles.input)}
      spellCheck={false}
      {...props}
    />
  );
};

export { TextInput };
