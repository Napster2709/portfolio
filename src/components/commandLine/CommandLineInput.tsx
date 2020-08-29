import React, { useEffect, useState } from 'react';
import styles from './styles.commandLineInput.scss';

interface CommandLineInputProps {
  submitEvent: (val: any) => void;
  value?: string;
  initialFocus?: boolean;
}

const CommandLineInput = ({
  submitEvent,
  initialFocus,
  value,
}: CommandLineInputProps) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const [inputValue, setInputValue] = useState<string>(value || '');

  useEffect(() => {
    if (initialFocus) {
      inputRef.current.focus();
    }
  }, []);

  const onkeydownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      submitEvent(event.currentTarget.value);
      event.currentTarget.value = null;
    }
  };

  const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={onChangeEvent}
        onKeyDown={onkeydownHandler}
        className={styles.input}
      />
    </div>
  );
};

export { CommandLineInput };
