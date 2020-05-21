import React from 'react';
import styles from './styles.scss';
import { Huge, HugeInput } from 'components';

const Home = () => {
  const text = 'SOON';

  return (
    <div className={styles.fullpage}>
      <HugeInput value={text} />
    </div>
  );
};

export { Home };
