import React, { useState, createRef, useEffect } from 'react';
import styles from './styles.input.scss';
import { sleep } from 'utils';
import { nextTick } from 'process';

interface HugeInputProps {
  value: string | number | string[];
}

interface TextMatch {
  oldValue: string;
  newValue: string;
}

const HugeInput = ({ value }: HugeInputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [disabled, setDisabled] = useState<boolean>(false);
  const inputRef = createRef<HTMLInputElement>();

  const activeInput = () => {
    setDisabled(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    activeInput();
  }, []);

  const containString = (
    string: string,
    callback: (text: TextMatch) => void,
  ) => {
    if (string.toLowerCase().includes('where')) {
      callback({ oldValue: string, newValue: 'something' });
    }
  };

  const typeingAnimation = async (match: TextMatch) => {
    await clearWriting(match.oldValue);
    await writeText(match.newValue);
    activeInput();
  };

  const writeText = async (text: string) => {
    let newText: string = '';
    return new Promise(async (resolve, reject) => {
      let i = 0;
      for (i; i < text.length; i++) {
        newText = newText + text[i];
        setInputValue(newText);
        await sleep(50);
      }

      if (i === text.length) {
        resolve();
      }
    });
  };

  const clearWriting = async (text: string) => {
    let newString: string = text;
    setDisabled(true);
    return new Promise((resolve, reject) => {
      const clear = setInterval(() => {
        if (newString.length > 0) {
          newString = newString.slice(0, -1);
          setInputValue(newString);
        } else {
          clearInterval(clear);
          resolve();
        }
      }, 150);
    });
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    containString(event.target.value, typeingAnimation);
  };

  return (
    <input
      ref={inputRef}
      className={styles.hugeInput}
      value={inputValue}
      onChange={changeHandler}
      spellCheck={false}
      disabled={disabled}
    />
  );
};

export { HugeInput };
