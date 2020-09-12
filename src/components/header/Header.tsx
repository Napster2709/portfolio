import React from 'react';
import { Logo } from '../logo';
import styles from './styles.scss';

const Header = () => {
  return (
    <>
      <Logo />
      <div className={styles.header}>im header</div>
    </>
  );
};

export { Header };
