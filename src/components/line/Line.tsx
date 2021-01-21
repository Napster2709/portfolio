import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';

interface LineProps {
  className?: string;
  align?: 'center' | 'left' | 'right';
}

const Line: React.FC<LineProps> = ({ className, align = 'center' }) => {
  return (
    <div
      className={cn(className, styles.container, {
        [styles[align as string]]: align,
      })}
    >
      <div className={styles.line} />
    </div>
  );
};

export { Line };
