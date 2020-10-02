import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>;
  className?: string;
}

const TextInput = ({
  inputRef,
  className,
  ...props
}: TextInputProps): React.ReactElement => {
  return (
    <input
      {...props}
      ref={inputRef}
      className={cn(className, styles.input)}
      spellCheck={false}
    />
  );
};

export { TextInput };
