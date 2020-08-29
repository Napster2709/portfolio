import React from 'react';
import styles from './styles.scss';
import { CommandLineInput, Huge } from 'components';

const Home = () => {
  const text = 'SOON';

  return (
    <div className={styles.home}>
      <div className={styles.fadeIn}>
        <CommandLineInput
          initialFocus
          submitEvent={(e) => console.log(e)}
          value="test"
        />
      </div>
    </div>
  );
};

export { Home };
