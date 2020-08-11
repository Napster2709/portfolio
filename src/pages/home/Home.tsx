import React from 'react';
import styles from './styles.scss';
import { CommandLineInput, Huge } from 'components';

const Home = () => {
  const text = 'SOON';

  return (
    <div className={styles.fullpage}>
      <Huge>test</Huge>
      <CommandLineInput />
      <p>test</p>
    </div>
  );
};

export { Home };
