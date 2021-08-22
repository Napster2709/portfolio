import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

interface BackArrowProps {
  to: string;
}

const BackArrow = ({ to }: BackArrowProps): React.ReactElement => {
  return (
    <Link to={to}>
      <div className={styles.arrow}>
        <div className={styles.inner}></div>
      </div>
    </Link>
  );
};

export { BackArrow };
