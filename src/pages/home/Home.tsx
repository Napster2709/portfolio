import React from 'react';
import styles from './styles.scss';
import { CommandLineInput } from 'components';

const Home = () => {
  const text = 'SOON';

  return (
    <div className={styles.fullpage}>
      <CommandLineInput />
    </div>
  );
};

export { Home };
