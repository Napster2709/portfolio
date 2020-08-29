import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { AnyMxRecord } from 'dns';

interface TextInputProps {
  inputRef?: any;
  className?: any;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const TextInput = ({
  inputRef,
  className,
  value,
  onChange,
  onKeyDown,
  disabled,
}: TextInputProps) => {
  return (
    <input
      ref={inputRef}
      className={cn(className, styles.input)}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      spellCheck={false}
      disabled={disabled}
    />
  );
};

export { TextInput };
