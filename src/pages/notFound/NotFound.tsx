import { Button, Huge } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import cn from 'classnames';

const PageNotFound = () => {
  return (
    <div
      className={cn(
        styles.main,
        styles.centered,
        styles.textAlignCenter,
        styles.content,
      )}
    >
      <Huge>Page not found</Huge>
      <div className={styles.line} />
      <Link to="/">
        <div className={styles.back}>Back to home</div>
      </Link>
    </div>
  );
};

export { PageNotFound };
