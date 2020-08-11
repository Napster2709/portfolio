import React from 'react';
import styles from './styles.commandLineInput.scss';

const CommandLineInput = () => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        className={styles.input}
        onSubmit={() => console.log('object')}
      />
    </div>
  );
};

export { CommandLineInput };
