import * as React from 'react';
import * as styles from './styles.scss';
import { Huge } from 'components';

const Home = () => {
  const text = 'SOON';

  return (
    <div className={styles.fullpage}>
      <Huge>{text}</Huge>
    </div>
  );
};

export { Home };
