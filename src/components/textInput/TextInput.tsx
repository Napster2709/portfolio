import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { AnyMxRecord } from 'dns';

interface TextInputProps {
  inputRef?: any;
  className?: any;
  value?: any;
  onChange?: any;
  disabled?: boolean;
}

const TextInput = ({
  inputRef,
  className,
  value,
  onChange,
  disabled,
}: TextInputProps) => {
  return (
    <input
      ref={inputRef}
      className={cn(className, styles.input)}
      value={value}
      onChange={onChange}
      spellCheck={false}
      disabled={disabled}
    />
  );
};

export { TextInput };
