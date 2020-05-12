import React, { useEffect, useState } from 'react';
import { TextInput } from 'components';
import styles from './styles.commandLineInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

interface CommandLineInputProps {
  submitEvent: (val: string) => void;
  value?: string;
  initialFocus?: boolean;
}

const CommandLineInput: React.FC<CommandLineInputProps> = ({
  submitEvent,
  initialFocus,
  value,
}) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const [inputValue, setInputValue] = useState<string>(value || '');

  useEffect(() => {
    if (initialFocus) {
      inputRef.current.focus();
    }
  }, []);

  const onkeydownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const value = event.currentTarget.value;
      setInputValue('');
      submitEvent(value);
    }
  };

  const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <TextInput
        inputRef={inputRef}
        value={inputValue}
        onChange={onChangeEvent}
        onKeyDown={onkeydownHandler}
        className={styles.input}
      />
      <div
        onClick={() => {
          submitEvent(inputValue);
          setInputValue('');
        }}
        className={cn(styles.centered, styles.submitButton)}
      >
        <FontAwesomeIcon icon={faPlay} />
      </div>
    </div>
  );
};

export { CommandLineInput };
