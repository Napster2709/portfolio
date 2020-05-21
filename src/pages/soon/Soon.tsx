import React from 'react';
import styles from './styles.scss';
import { HugeInput } from 'components';

const Soon = () => {
  const text = 'SOON';

  return (
    <div className={styles.fullpage}>
      <HugeInput value={text} />
    </div>
  );
};

export { Soon };
