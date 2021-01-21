import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn(styles.logo, className)}>
      <svg viewBox="0 0 150 110" width="150pt" height="110pt">
        <path d=" M 41.253 65.357 L 69.549 109.004 L 90.263 109.004 L 90.263 80.522 L 75.467 67.206 L 75.467 91.249 L 58.221 65.357 L 41.253 65.357 Z " />
        <path d=" M 75.467 61.75 L 89.864 75.327 L 127.899 109.004 L 150 109.004 L 96.181 57.219 L 150 0.996 L 127.668 0.996 L 89.916 40.944 L 90.263 0.996 L 75.467 0.996 L 75.467 61.75 Z " />
        <path d=" M 0.01 109.004 L 0.01 48.342 L 0.01 48.342 L 46.293 48.342 L 55.771 61.75 L 14.806 61.75 L 15.176 109.004 L 0.01 109.004 Z " />
        <path d=" M 0.01 43.626 L 0.01 0.996 L 0.01 0.996 L 58.591 0.996 L 58.221 14.312 L 15.176 14.312 L 15.176 43.626 L 0.01 43.626 Z " />
      </svg>
    </div>
  );
};

export { Logo };
