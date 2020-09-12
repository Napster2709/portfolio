import React from 'react';
import { Logo } from '../logo';
import styles from './styles.scss';

const Header = () => {
  return (
    <>
      <Logo className={styles.logo} />
      <div className={styles.header}>im header</div>
    </>
  );
};

export { Header };
