import React, { useState, createRef, useEffect } from 'react';
import styles from './styles.input.scss';
import { sleep, writeText } from 'utils';
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

const HugeInput = ({ value }: HugeInputProps): React.ReactElement => {
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
    await writeText({
      text: match.newValue,
      setNewText: (newText: string) => setInputValue(newText),
    });
    activeInput();
  };

  const clearWriting = async (text: string) => {
    let newString: string = text;
    setDisabled(true);
    return new Promise((resolve, _) => {
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

  /**
   * On Input change start and reset a timeout, to change if person is still typing.
   * If one second since last input, execute containString()
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputRef.current?.value) {
        containString(inputRef.current.value, typeingAnimation);
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [inputValue]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
