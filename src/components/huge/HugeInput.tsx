import React, { useState, createRef, useEffect } from 'react';
import styles from './styles.input.scss';
import { sleep } from 'utils';
import { TextInput } from '../textInput';
import textJson from './texts.json';

interface HugeInputProps {
  value: string | number | string[];
}

interface TextMatch {
  oldValue: string;
  newValue: string;
}

interface TextArrayItems {
  key: string;
  value: string[];
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
    (textJson.textArray as TextArrayItems[]).forEach((item: TextArrayItems) => {
      if (string.toLowerCase().includes(item.key)) {
        callback({
          oldValue: string,
          newValue: item.value[Math.floor(Math.random() * item.value.length)],
        });
      }
    });
  };

  const typeingAnimation = async (match: TextMatch) => {
    await clearWriting(match.oldValue);
    await writeText(match.newValue);
    activeInput();
    // await sleep(5000);
    // setInputValue(value);
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
    <TextInput
      inputRef={inputRef}
      className={styles.hugeInput}
      value={inputValue}
      onChange={changeHandler}
      disabled={disabled}
    />
  );
};

export { HugeInput };
