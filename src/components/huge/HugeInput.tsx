import React, { useState, createRef, useEffect } from 'react';
import styles from './styles.input.scss';

interface HugeInputProps {
  value: string | number | string[];
}

// TODO: put input in its own component
const HugeInput = ({ value }: HugeInputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    console.log(event);
  };

  return (
    <input
      ref={inputRef}
      className={styles.hugeInput}
      value={inputValue}
      onChange={changeHandler}
      spellCheck={false}
    />
  );
};

export { HugeInput };
