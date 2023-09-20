import React from 'react';
import { Link } from 'react-router-dom';
import s from './styles.scss';

interface BackArrowProps {
  to: string;
}

const BackArrow = ({ to }: BackArrowProps): React.ReactElement => {
  return (
    <Link to={to}>
      <div className={s.arrow}>
        <div className={s.inner}></div>
      </div>
    </Link>
  );
};

export { BackArrow };
